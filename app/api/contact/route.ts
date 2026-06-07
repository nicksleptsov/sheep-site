import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, phone, interest, comment } = await req.json();

  try {
    await resend.emails.send({
      from: "Сайт фермы <onboarding@resend.dev>",
      to: ["erna63@yandex.ru"],
      subject: `Новая заявка от ${name}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> +7${phone}</p>
        <p><strong>Интерес:</strong> ${interest || "не указан"}</p>
        <p><strong>Комментарий:</strong> ${comment || "нет"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Ошибка отправки" }, { status: 500 });
  }
}
