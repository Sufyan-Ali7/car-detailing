import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Schema, model, models } from "mongoose";
import nodemailer from "nodemailer";

// Booking Schema
const BookingSchema = new Schema(
  {
    phone: String,
    zipCode: String,
    address: String,
    carModel: String,
    services: [String],
    total: Number,
    imageUrl: String,
  },
  { timestamps: true }
);

const Booking = models.Booking || model("Booking", BookingSchema);

// API Route
export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();

    // Save booking to MongoDB
    const booking = await Booking.create(data);

    // Setup Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send notification email
    await transporter.sendMail({
      from: `"Crystal Clear Auto Detailing" <crystalclearautodetailing8@gmail.com>`, // ✅ Must be added & verified in Brevo Senders
      to: process.env.NOTIFY_EMAIL, // Where you want to receive notifications
      subject: "🚗 New Booking Submitted",
      html: `
        <h2>New Booking Details</h2>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Zip Code:</b> ${data.zipCode}</p>
        <p><b>Address:</b> ${data.address}</p>
        <p><b>Car Model:</b> ${data.carModel}</p>
        <p><b>Services:</b> ${data.services.join(", ")}</p>
        <p><b>Total:</b> $${data.total}</p>
        ${
          data.imageUrl
            ? `<p><b>Image:</b> <a href="${data.imageUrl}" target="_blank">View Image</a></p>`
            : ""
        }
      `,
    });

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Booking API Error:", message);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
