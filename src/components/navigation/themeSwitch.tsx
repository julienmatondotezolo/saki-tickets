"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";

import darkmodeIcon from "@/assets/icons/darkmode.svg";
import lightmodeIcon from "@/assets/icons/lightmode.svg";

function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  const size = 17;

  const toggleDarkMode = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="w-full flex items-center p-2 space-x-3 rounded-xl"
      >
        <Image
          className="dark:invert"
          src={resolvedTheme === "dark" ? lightmodeIcon : darkmodeIcon}
          width={size}
          height={size}
          alt={resolvedTheme === "dark" ? "Light mode icon" : "Dark mode icon"}
        />
        <p>{resolvedTheme === "dark" ? "Light mode" : "Dark mode"}</p>
      </button>
    </div>
  );
}

export default ThemeSwitch;
