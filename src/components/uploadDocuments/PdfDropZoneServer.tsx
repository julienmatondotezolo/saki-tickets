import Image from "next/image";
import React from "react";

import { upload } from "@/actions";

import { Button } from "../ui/button";

interface PdfDropZoneProps {}

const PdfDropZoneServer: React.FC<PdfDropZoneProps> = () => (
  <form action={upload}>
    <div className="relative group flex flex-col items-center border-dashed border-2 p-5 text-center min-h-24 mb-4 rounded-lg hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#FFCDF46A] dark:invert mb-4 opacity-50 transition-all duration-200 ease-in-out group-hover:scale-110 group-hover:opacity-100"
        src="/upload-file-dark.svg"
        alt="Next.js Logo"
        width={80}
        height={10}
        priority
      />
      <p>Drag and drop your PDF files here</p>
      <p className="text-sm opacity-50">Supports: .pdf</p>
      <input
        type="file"
        accept=".pdf"
        id="pdf-upload"
        className="absolute top-0 left-0 right-0 bottom-0 opacity-0"
        required
      />
    </div>
    <Button type="submit" className="w-full">
      Upload
    </Button>
  </form>
);

export { PdfDropZoneServer };
