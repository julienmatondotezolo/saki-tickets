import { ThemeProvider } from "next-themes";
import { JSX, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function Providers({ children }: Props): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}
