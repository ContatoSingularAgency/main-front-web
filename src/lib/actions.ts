"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Preencha nome, e-mail e mensagem." };
  }
  if (!isValidEmail(email)) {
    return { status: "error", message: "E-mail inválido." };
  }

  const payload = { name, email, phone, company, budget, message };

  // Envio via Resend quando RESEND_API_KEY estiver configurada (ver .env.example).
  // Sem a chave, a submissão só é logada no servidor — troque por um provedor
  // real (Resend, CRM, WhatsApp Business API) antes de ir pra produção.
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL;

  if (apiKey && toEmail) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Singular Agency <diagnostico@singularagency.com.br>",
          to: [toEmail],
          reply_to: email,
          subject: `Novo diagnóstico — ${name}${company ? ` (${company})` : ""}`,
          text: [
            `Nome: ${name}`,
            `E-mail: ${email}`,
            `Telefone: ${phone || "—"}`,
            `Empresa: ${company || "—"}`,
            `Verba mensal estimada: ${budget || "—"}`,
            "",
            "Mensagem:",
            message,
          ].join("\n"),
        }),
      });
      if (!res.ok) throw new Error(`Resend respondeu ${res.status}`);
    } catch (error) {
      console.error("[contact-form] falha ao enviar via Resend:", error);
      return {
        status: "error",
        message: "Não deu pra enviar agora. Tenta de novo ou fala direto pelo WhatsApp.",
      };
    }
  } else {
    console.info(
      "[contact-form] RESEND_API_KEY/CONTACT_FORM_TO_EMAIL não configurados — submissão apenas logada:",
      payload,
    );
  }

  return { status: "success" };
}
