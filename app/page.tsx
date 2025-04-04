import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-white text-black flex flex-col items-center justify-center p-4 sm:p-6 ${openSans.className}`}>
      <div className="bg-[#1d312a] rounded-xl flex flex-col items-center w-full max-w-3xl p-8">
        {/* Logo larger at the top */}
        <Image src="/logo.png" alt="Bloms Bulbs Logo" width={350} height={100} className="mb-4" />

        {/* Centered image with original proportions and no cropping */}
        <div className="w-full overflow-hidden rounded-lg flex justify-center items-center">
          <Image
            src="/background.jpg"
            alt="Catalogue Preview"
            width={600}
            height={225}
            className="rounded-lg object-contain"
          />
        </div>

        {/* Spring 2025 text under the image */}
        <h2 className="text-white text-base font-normal mt-4 tracking-wide uppercase">Spring 2025</h2>

        {/* Website under everything */}
        <p className="text-white text-2xl font-bold mt-2">www.blomsbulbs.com</p>
      </div>

      {/* Buttons underneath */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center justify-center">
        <a
          href="/bloms-spring-2025.pdf"
          download
          className="bg-[#1d312a] text-white px-6 py-3 rounded-full text-lg font-medium shadow hover:bg-[#29463d] transition"
        >
          Download Now
        </a>
        <a
          href="https://www.blomsbulbs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#1d312a] text-[#1d312a] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#1d312a] hover:text-white transition"
        >
          Visit Our Website to Shop Online
        </a>
      </div>
    </div>
  );
}