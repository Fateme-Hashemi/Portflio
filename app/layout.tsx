import "./globals.css";
import Header from "./sections/Header/Header";
import Providers from "./context/Providers";

// ==================
// fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// ==================

// ==================
// google fonts
import { Inter, Poppins, Open_Sans } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
const openSans = Open_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
// ==================

// ==================
// Metadata
import type { Metadata } from "next";
import Footer from "./sections/Footer";

export const metadata: Metadata = {
  title: "Elin Hashemi | Personal Portfolio",
  description:
    "Bachelor of Computer Science | Software Developer",
  authors: { name: "Elin Hashemi", url: "https://github.com/Fateme-Hashemi" },
  openGraph: {
    title: "Elin Hashemi | Personal Portfolio",
    description:
      "Bachelor of Computer Science | Software Developer",
    emails: "elinhashemi.r@gmail.com",
    url: "https://github.com/Fateme-Hashemi",
  },
};
// ==================


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.className} bg-iron-300 text-txt_primary-500 relative min-h-[3000px]  `}
      >
        <div
          className="bg-[#fdcfa1] absolute top-[-12rem] -right-[0vw] -z-10  h-[30rem] w-[50vw] rounded-full  sm:w-[62vw] 
          blur-[5rem] sm:blur-[7rem]
          md:blur-[10rem] overflow-x-hidden"
        ></div>
        <div className="bg-[#9bc6ed] absolute top-[-6rem] -z-10 left-[-9vw] h-[32rem] w-[70vw] rounded-full  sm:w-[68.75vw] sm:left-[-16vw]  blur-[5rem] sm:blur-[7rem] md:blur-[10rem] "></div>

        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
