import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});


const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Abhas Somkuwar - Portfolio",
  description: "Designing human experiences in code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-white" suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
