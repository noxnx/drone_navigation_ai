import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemesProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Flemming Kaffee und Maschinen",
  description: "Flemming Kaffee und Maschinen GmbH",
  keywords: "Kaffee, Maschinen, Flemming Kaffee und Maschinen GmbH, Saarlouis, Saarland, Siebträgermaschinen, Vollautomaten, Kaffeemaschinen, Verkauf"
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={inter.className} suppressHydrationWarning>
      <body>
      <ThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemesProvider>
      </body>
    </html>
  );
}
