import Image from "next/image";
import { Inter } from "next/font/google";
import { Rubik, Lato } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import EmailInput from "@/components/button/EmailInput";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main>
      <div className="w-full px-10 ">
        <div className="w-full h-full flex flex-col border-r-amber-600 border-opacity-20 border-l-amber-600 border-r border-l">
          <div className="w-[1px] h-full bg-[#DF7A20] opacity-20 mx-auto z-0"></div>
          <Navbar />
          {/* hero */}
          <div className="flex relative h-full w-full ">
            <img
              src="../Chair-1.png"
              className="absolute w-full top-40 md:w-auto z-0 right-1 md:top-2"
            ></img>
            <div className="flex flex-col top-28 ml-[75px] absolute z-1">
              <h1
                className={`text-amber-600 font-bold text-7xl uppercase ${rubik.className}`}
              >
                An environment that speaks{" "}
              </h1>
              <div className={`w-[460px] mt-14 pt-1 ${lato.className}`}>
                It whispers stories of inspiration, inviting individuals to
                embark on a journey of discovery. Through thoughtful design
                choices, harmonious elements, and purposeful details, we curate
                spaces that communicate, evoke emotions, and leave a lasting
                impact.
              </div>
              <div className="w-1/2 mt-8">
                <EmailInput />
              </div>
            </div>
          </div>
        </div>
      </div>
                <div className="w-full flex justify-center relative">
            <div className="w-[1380px]  top-96 rounded-xl absolute z-5 bg-[#212B31] flex flex-row">
              Hello World
            </div>
          </div>
    </main>
  );
}
