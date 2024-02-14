import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(request: NextRequest, res: NextResponse) {
  if (request.method !== "POST") {
    res.statusText;
    return NextResponse.json({ message: "Method Not Allowed" });
  }

  const bytes = await request.arrayBuffer;

  console.log("bytes:", bytes);

  return NextResponse.json({ name: "FILE RECEIVED" });
}
