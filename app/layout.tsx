import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Visual Content System | Build Your Own AI Visual Department",
  description:
    "We turn your brand, content and design rules into a visual production system you can run yourself. Built around your brand. Owned by you. Designed to evolve. A tangible product and service by Ajenci.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="grain antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(localStorage.getItem("avcs-theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}',
          }}
        />
        {children}
      </body>
    </html>
  );
}
