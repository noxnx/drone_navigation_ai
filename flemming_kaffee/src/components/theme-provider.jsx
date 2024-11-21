"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

export function ThemesProvider({ children, ...props }) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
