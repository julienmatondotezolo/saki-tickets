import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" });
  }

  try {
    // Get the ArrayBuffer from the request
    const pdfBytes = await request.arrayBuffer();

    // Load the PDFDocument from the ArrayBuffer
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Crop each page of the PDF
    const pages = pdfDoc.getPages();

    // Check if the PDF has more than 1 page
    if (pages.length < 2) {
      // Accéder à la page à rogner
      const page = pdfDoc.getPages()[0];

      const cropBox = {
        x: 0,
        y: 0,
        width: 400 + 100,
        height: 800,
      };

      // Create a new page with the crop box dimensions
      const newPage = pdfDoc.addPage([cropBox.width, cropBox.height]);

      // Embed the original page into the document
      const embeddedPage = await pdfDoc.embedPage(page, {
        left: 19.75 + 7,
        right: 397.01 - 95,
        bottom: 303.18 + 98,
        top: 822.25,
      });

      newPage.drawPage(embeddedPage, {
        x: cropBox.x,
        y: cropBox.y,
        width: cropBox.width,
        height: cropBox.height,
      });

      pdfDoc.removePage(0);
    } else {
      console.error("PDF has more than 1 page");
    }

    // Save the modified PDF
    const croppedBytes = await pdfDoc.save();

    // Create a response with the cropped PDF bytes
    const response = new NextResponse(croppedBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=cropped.pdf",
      },
    });

    return response;
  } catch (error) {
    // Handle any errors that occur while reading the PDF
    console.error("Error reading the PDF file:", error);
    return NextResponse.json({ message: "Error reading the PDF file" });
  }
}
