import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-no-repeat text-white flex flex-col justify-between items-center ${openSans.className}`}
      style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      {/* Logo */}
      <header className="w-full p-6 flex justify-start">
        <Image src="/logo.png" alt="Bloms Bulbs Logo" width={300} height={90} />
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-6 items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold uppercase tracking-wide">Spring 2025 Bulb Catalogue</h1>

        <a
          href="/my-document.pdf"
          download
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium shadow hover:bg-gray-100 transition"
        >
          Download Now
        </a>
        <a
          href="https://www.blomsbulbs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition"
        >
          Visit Our Website to Shop Online
        </a>
      </main>

      {/* Footer */}
      <footer className="text-sm text-center p-4 w-full" style={{ backgroundColor: "rgba(29, 49, 42, 0.7)" }}>
        Bloms Bulbs, Primrose Nurseries, Melchbourne, Bedford, MK44 1ZZ<br />
        T: 01234 709099 &nbsp;&nbsp;|&nbsp;&nbsp; E: help@blomsbulbs.com
      </footer>
    </div>
  );
}
