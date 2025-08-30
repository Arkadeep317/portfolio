import { NextResponse } from "next/server"

type ContactPayload = {
  name?: string
  email?: string
  message?: string
  subject?: string
  _gotcha?: string // honeypot
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const { name = "", email = "", message = "", subject = "New portfolio message", _gotcha = "" } = body || {}

    // Basic validation
    if (_gotcha) {
      // likely spam
      return NextResponse.json({ ok: true, skipped: true }, { status: 200 })
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 })
    }

    // Ensure env vars exist (server-only)
    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL

    if (!apiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Email configuration missing. Set RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL." },
        { status: 500 },
      )
    }

    // Send email via Resend REST API
    const html = `
      <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 8px">New message from your portfolio</h2>
        <p style="margin:0 0 8px"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin:12px 0 0"><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;margin-top:4px">${escapeHtml(message)}</p>
      </div>
    `

    const resendResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: [email],
        subject,
        html,
      }),
    })

    if (!resendResp.ok) {
      const text = await resendResp.text().catch(() => "")
      return NextResponse.json({ ok: false, error: `Resend error: ${text || resendResp.statusText}` }, { status: 502 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Unknown error" }, { status: 500 })
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
