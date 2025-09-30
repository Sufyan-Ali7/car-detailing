import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/contact";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const contact = await Contact.create(data);
    return NextResponse.json({ success: true, contact });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
