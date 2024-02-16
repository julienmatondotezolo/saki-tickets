import React from "react";

import { ThemeSwitch } from "./themeSwitch";

function Navigation() {
  return (
    <nav className="flex justify-center w-full fixed top-0 py-3 border-b-2 backdrop-filter backdrop-blur-l">
      <div className="flex justify-between max-w-6xl w-[90%]">
        <p>NAV</p>
        <ThemeSwitch />
      </div>
    </nav>
  );
}

export { Navigation };
