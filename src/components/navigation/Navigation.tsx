import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const ThemeSwitch = dynamic(() => import("./themeSwitch"), { ssr: false });

function Navigation() {
  return (
    <nav className="flex justify-center w-full fixed top-0 py-3 border-b-2 backdrop-filter backdrop-blur-l">
      <div className="flex align-middle justify-between max-w-6xl w-[90%]">
        <Image
          className="relative dark:invert opacity-80 transition-all duration-200 ease-in-out hover:scale-110 hover:opacity-100"
          src="/saki-logo.svg"
          alt="Next.js Logo"
          width={60}
          height={10}
          priority
        />
        <ThemeSwitch />
      </div>
    </nav>
  );
}

export { Navigation };
