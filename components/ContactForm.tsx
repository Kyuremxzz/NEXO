"use client";

import { useState, type FormEvent } from "react";

type Status = { kind: "idle" | "sending" | "ok" | "error"; msg?: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Não foi possível enviar agora.");
      form.reset();
      setStatus({ kind: "ok", msg: "Mensagem enviada! Respondemos no mesmo dia." });
    } catch (err) {
      setStatus({ kind: "error", msg: err instanceof Error ? err.message : "Não foi possível enviar agora." });
    }
  }

  const sending = status.kind === "sending";

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label className="field">
        <span>Nome *</span>
        <input className="input" name="nome" required maxLength={120} autoComplete="name" />
      </label>
      <label className="field">
        <span>Restaurante</span>
        <input className="input" name="restaurante" maxLength={160} autoComplete="organization" />
      </label>
      <label className="field">
        <span>E-mail *</span>
        <input className="input" name="email" type="email" required maxLength={200} autoComplete="email" />
      </label>
      <label className="field">
        <span>WhatsApp / telefone</span>
        <input className="input" name="telefone" type="tel" maxLength={40} autoComplete="tel" />
      </label>
      <label className="field field-full">
        <span>Mensagem *</span>
        <textarea className="input textarea" name="mensagem" required maxLength={4000} rows={5} />
      </label>
      {/* Armadilha para robôs: invisível para pessoas. */}
      <input className="hp" name="site" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="field-full form-foot">
        <button className="btn btn-lg" type="submit" disabled={sending}>
          {sending ? "Enviando…" : "Enviar mensagem"}
        </button>
        <p className={`caption form-status${status.kind === "error" ? " is-error" : ""}`} role="status" aria-live="polite">
          {status.msg}
        </p>
      </div>
    </form>
  );
}
