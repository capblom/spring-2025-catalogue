import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Bloms Spring Catalogue 2025",
  description: "Download the Bloms Spring 2025 Bulb Catalogue or visit our shop online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}