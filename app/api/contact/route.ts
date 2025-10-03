import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/contact";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();

    // 1️⃣ Save contact form to MongoDB
    const contact = await Contact.create(data);

    // 2️⃣ Setup Brevo SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3️⃣ Send email notification with contact details
    await transporter.sendMail({
      from: `"Crystal Clear Auto Detailing" <crystalclearautodetailing8@gmail.com>`, // must be verified in Brevo
      to: process.env.NOTIFY_EMAIL, // where you want to receive contact messages
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Message:</b></p>
        <p>${data.message}</p>
      `,
    });

    // 4️⃣ Return success
    return NextResponse.json({ success: true, contact });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
