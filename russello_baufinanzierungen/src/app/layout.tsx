import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Russello Finanz",
  applicationName: "Russello Finanz",
  description:
    "Russello Finanz ist Ihr Experte für Baufinanzierung, Anschlussfinanzierung, Modernisierungskredite und Privatkredite. Finden Sie maßgeschneiderte Finanzierungspläne und beste Konditionen – vertrauensvoll und persönlich.",
  keywords: [
    "Baufinanzierung",
    "Immobilienkredite",
    "Anschlussfinanzierung",
    "Modernisierungskredite",
    "Privatkredite",
    "Finanzierung ohne Eigenkapital",
    "Finanzplanung",
    "Kredite für Immobilien",
    "Russello Finanz",
    "Finanzberatung",
  ],
  creator: "Thorben Schirra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="">{children}</body>
    </html>
  );
}
