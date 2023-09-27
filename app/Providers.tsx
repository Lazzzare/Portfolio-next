"use client";
import { ThemeProvider } from "next-themes";

interface RootLayoutProps {
  children: React.ReactNode;
}

const Providers = ({ children }: RootLayoutProps) => {
  // const { theme, setTheme } = useTheme();
  return (
    <ThemeProvider attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
