"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemesToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all 
            ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
      />
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all 
            ${theme === "light" ? "-rotate-90 scale-0" : "rotate-0 scale-100"}`}
      />
    </Button>
  );
};

export default ThemesToggle;
