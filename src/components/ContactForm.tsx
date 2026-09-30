"use client";

import { useActionState } from "react";
import { copy } from "@/content/copy.pt-BR";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { Reveal } from "@/components/Reveal";
import { OrbitDotPair } from "@/components/primitives/OrbitDotPair";

const initialState: ContactFormState = { status: "idle" };

const inputClass =
  "w-full rounded-input border border-warm-gray bg-white px-4 py-3.5 text-base text-soft-black placeholder:text-stone/60 focus:border-[1.5px] focus:border-orange focus:outline-none";
const labelClass = "mb-1.5 block text-[13px] font-medium text-stone-aa";

export function ContactForm() {
  const { contactForm } = copy;
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <section id="contato" className="bg-ivory py-24">
      <div className="mx-auto max-w-[720px] px-6 md:px-12">
        <Reveal className="mb-10 text-center">
          <div className="flex justify-center">
            <OrbitDotPair />
          </div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-stone-aa">
            {contactForm.eyebrow}
          </p>
          <h2 className="mt-3 text-[clamp(24px,3.6vw,36px)] font-semibold tracking-[-0.01em] text-balance">
            {contactForm.headline}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          {state.status === "success" ? (
            <p
              role="status"
              className="rounded-card border border-warm-gray bg-white p-8 text-center text-base text-soft-black"
            >
              {contactForm.success}
            </p>
          ) : (
            <form action={formAction} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="cf-name" className={labelClass}>
                  {contactForm.fields.name}
                </label>
                <input id="cf-name" name="name" type="text" required className={inputClass} />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="cf-email" className={labelClass}>
                  {contactForm.fields.email}
                </label>
                <input id="cf-email" name="email" type="email" required className={inputClass} />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="cf-phone" className={labelClass}>
                  {contactForm.fields.phone}
                </label>
                <input id="cf-phone" name="phone" type="tel" className={inputClass} />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="cf-company" className={labelClass}>
                  {contactForm.fields.company}
                </label>
                <input id="cf-company" name="company" type="text" className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cf-budget" className={labelClass}>
                  {contactForm.fields.budget}
                </label>
                <select id="cf-budget" name="budget" className={inputClass}>
                  <option value="">Selecionar</option>
                  {contactForm.budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cf-message" className={labelClass}>
                  {contactForm.fields.message}
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={4}
                  className={`${inputClass} resize-y`}
                />
              </div>

              {state.status === "error" && (
                <p role="alert" className="sm:col-span-2 text-sm font-medium text-orange">
                  {state.message ?? contactForm.error}
                </p>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={pending}
                  className="w-full rounded-full bg-orange px-8 py-4 text-[14px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-orange-hover disabled:opacity-60 sm:w-auto"
                >
                  {pending ? contactForm.submitting : contactForm.submit}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
