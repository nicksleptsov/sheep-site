"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", interest: "", comment: "" });

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setForm({ ...form, phone: digits });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", interest: "", comment: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#e6dfd8] rounded-xl p-6 sm:p-8 space-y-5">
      <div>
        <label className="block font-display font-bold text-[13px] text-[#6c6a64] mb-2">
          Ваше имя
        </label>
        <input
          type="text"
          placeholder="Иван"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-[#e6dfd8] rounded-lg px-[14px] h-10 text-[15px] text-[#141413] bg-[#faf9f5] focus:outline-none focus:border-[#cc785c] transition-colors"
        />
      </div>
      <div>
        <label className="block font-display font-bold text-[13px] text-[#6c6a64] mb-2">
          Телефон
        </label>
        <div className="flex items-center border border-[#e6dfd8] rounded-lg bg-[#faf9f5] focus-within:border-[#cc785c] transition-colors h-10 px-[14px]">
          <span className="text-[15px] text-[#141413] select-none mr-1">+7</span>
          <input
            type="tel"
            placeholder="(___) ___-__-__"
            value={form.phone}
            onChange={handlePhone}
            required
            className="flex-1 bg-transparent text-[15px] text-[#141413] focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block font-display font-bold text-[13px] text-[#6c6a64] mb-2">
          Что вас интересует?
        </label>
        <select
          value={form.interest}
          onChange={(e) => setForm({ ...form, interest: e.target.value })}
          className="w-full border border-[#e6dfd8] rounded-lg px-[14px] h-10 text-[15px] text-[#141413] bg-[#faf9f5] focus:outline-none focus:border-[#cc785c] transition-colors"
        >
          <option value="">Выберите...</option>
          <option value="Живые овцы">Живые овцы</option>
          <option value="Фермерское мясо">Фермерское мясо</option>
          <option value="Консультация">Консультация</option>
        </select>
      </div>
      <div>
        <label className="block font-display font-bold text-[13px] text-[#6c6a64] mb-2">
          Комментарий
        </label>
        <textarea
          placeholder="Количество, пожелания, вопросы..."
          rows={3}
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          className="w-full border border-[#e6dfd8] rounded-lg px-[14px] py-[10px] text-[15px] text-[#141413] bg-[#faf9f5] focus:outline-none focus:border-[#cc785c] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#cc785c] hover:bg-[#a9583e] disabled:opacity-60 text-white text-[14px] font-medium py-3 rounded-full transition-colors"
      >
        {status === "loading" ? "Отправляем..." : "Отправить заявку"}
      </button>
      {status === "success" && (
        <p className="text-green-600 text-[14px] font-bold text-center">Ваша заявка отправлена!</p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-[14px] text-center">Ошибка отправки. Позвоните нам напрямую.</p>
      )}
    </form>
  );
}
