import type { Metadata } from "next"
import "./globals.css";
import { Albert_Sans, Figtree } from "next/font/google";


const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeenSP",
  description: "Keen Software Platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${albertSans.variable}`}>
      <body
        className={`min-h-screen bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
