import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Schema, model, models } from "mongoose";

const BookingSchema = new Schema({
  phone: String,
  zipCode: String,
  address: String,
  carModel: String,
  services: [String],
  total: Number,
  imageUrl: String,
}, { timestamps: true });

const Booking = models.Booking || model("Booking", BookingSchema);

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const booking = await Booking.create(data);
    return NextResponse.json({ success: true, booking });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
