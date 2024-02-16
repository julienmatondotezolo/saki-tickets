import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";

function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  console.log("resolvedTheme:", resolvedTheme);
  const size = 17;

  const darkmodeIcon = "/darkmode.svg";
  const lightmodeIcon = "/lightmode.svg";

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
          alt="Profile icon"
        />
        <p>{resolvedTheme === "dark" ? "Light mode" : "Dark mode"}</p>
      </button>
    </div>
  );
}

export { ThemeSwitch };
