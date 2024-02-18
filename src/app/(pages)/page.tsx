"use client";

import { Navigation, PdfDropZone } from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
        <div className="absolute flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-purple-500 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-200 after:via-pink-800 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#ff01d9] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        <article className="pt-8 w-full flex flex-wrap items-center text-center space-y-8">
          <h1 className="font-medium text-5xl text-foreground dark:gradientWhiteText">
            Drag your PDF file here.
            <br />
            made with <span className=" text-secondary-pink">love</span>
          </h1>
          <p className="text-grey dark:text-grey-blue sm:w-3/4 w-full">
            Drag your pdf file underneath and it will be cropped to your desired
            size. You file will be automatically downloaded on your PC.
          </p>
        </article>
        <PdfDropZone />
      </main>
    </>
  );
}
