import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" });
  }

  try {
    // Get the ArrayBuffer from the request
    const bytes = await request.arrayBuffer();

    // Load the PDFDocument from the ArrayBuffer
    const pdfDoc = await PDFDocument.load(bytes);

    // Crop each page of the PDF
    const pages = pdfDoc.getPages();
    const croppedPages = [];

    for (const page of pages) {
      // Define the crop box dimensions (you can adjust these as needed)
      const cropBox = {
        x: 0,
        y: 0,
        width: 2455,
        height: 1708,
      };

      // Create a new page with the crop box dimensions
      const newPage = pdfDoc.addPage([cropBox.width, cropBox.height]);

      // Embed the original page into the document
      const embeddedPage = await pdfDoc.embedPage(page);

      // Draw the original page onto the new page, offset by the crop box's coordinates
      newPage.drawPage(embeddedPage, {
        x: -cropBox.x,
        y: -cropBox.y,
        width: 2455,
        height: page.getHeight(),
      });

      // Add the new page to the list of cropped pages
      croppedPages.push(newPage);
    }

    // Remove the original pages
    for (let i = pages.length - 1; i >= 0; i--) {
      pdfDoc.removePage(i);
    }

    // Add the cropped pages back to the document
    for (const page of croppedPages) {
      pdfDoc.addPage(page);
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
