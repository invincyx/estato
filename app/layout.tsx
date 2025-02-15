import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const avenir = localFont({
  src: [
    {
      path: "./fonts/AvenirLTStd-Roman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AvenirLTStd-Book.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AvenirLTStd-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
});

export const metadata: Metadata = {
  title: "Estato - Real Estate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${avenir.variable} antialiased`}>{children}


        {children}
      </body>
    </html>
  );
}
