import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json();
    const { name, email, message } = body;

    // Validate
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your name (at least 2 characters)." },
        { status: 400 }
      );
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    try {
      await resend.emails.send({
        from: "Ashlesha Portfolio <onboarding@resend.dev>",
        to: "ashleshasarma.contact@gmail.com",
        replyTo: email,
        subject: `New message from ${name}`,
        html: `
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      });
    } catch (resendError) {
      console.error("Resend API Error:", resendError);
      return NextResponse.json(
        { error: "Failed to send the email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
