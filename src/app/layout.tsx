import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
function paletteVariables(palette: Record<string, string>) {
  return Object.entries(palette)
    .map(
      ([key, value]) =>
        `--${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}:${value}`,
    )
    .join(";");
}
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.productName, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    title: site.productName,
    description: site.description,
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.productName,
    description: site.description,
  },
};
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})()`;
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <style>{`:root{${paletteVariables(site.palettes.light)};${paletteVariables(site.colors)}}.dark{${paletteVariables(site.palettes.dark)};--brand:${site.colors.darkBrand};--brand-soft:${site.colors.darkSoft}}`}</style>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          {site.controls.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
