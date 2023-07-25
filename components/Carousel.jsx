import React from "react";
import { Rubik, Lato } from "next/font/google";
import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";
import { useState } from "react";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const Carousel = () => {
  return (
    <div>
      {/* desktop */}
      <div className="hidden md:flex flex-row items-center w-full">
        {/* sisi kiri */}
        <div className="flex flex-col w-1/2">
          <h1 className={`font-bold text-2xl ${rubik.className}`}>Portfolio</h1>
          <div className="flex flex-row items-center mt-14">
            <h1
              className={`font-bold text-3xl text-[#212B31]/50 ${rubik.className}`}
            >
              01
            </h1>
            <div className="h-[1px] ml-[30px] bg-amber-600 w-3/4"></div>
          </div>
          <div className="flex flex-col w-full mt-10">
            <h1
              className={`font-bold uppercase w-1/4 text-3xl ${rubik.className}`}
            >
              Project Name
            </h1>
            <p
              className={`text-black/50 w-[433px] mt-[38px] ${lato.className}`}
            >
              Collaboration is at the heart of our agency. We foster open
              communication, embracing the ideas and input of our clients
              throughout the design process.Collaboration is at the heart of our
              agency. We foster open communication, embracing the ideas and
              input of our clients throughout the design process.Collaboration
              is at the heart of our agency. We foster open communication,
              embracing the ideas and input of our clients throughout the design
              process.
            </p>
          </div>
          <div className="flex flex-row w-1/4 gap-3 mt-12">
            <div className="bg-none text-amber-600 border-amber-600 border rounded-full p-3">
              <MdOutlineArrowBack className="w-[15px] h-[15px]" />
            </div>
            <div className="bg-none text-amber-600 border-amber-600 border rounded-full p-3">
              <MdOutlineArrowForward className="w-[15px] h-[15px]" />
            </div>
          </div>
        </div>
        {/* sisi kanan */}
        <div className="flex flex-col w-1/2">
          <img src="../portfolio/picture-1.png" className="w-full h-auto"></img>
          <div className="flex flex-row gap-6 mt-7">
            <div className="w-1/3 h-auto">
              <img src="../portfolio/picture-2.png"></img>
            </div>
            <div className="w-1/3 h-auto">
              <img src="../portfolio/picture-3.png"></img>
            </div>
            <div className="w-1/3 h-auto">
              <img src="../portfolio/picture-4.png"></img>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex flex-col w-full justify-center items-center md:hidden">
        <h1
          className={`text-black/50 uppercase font-bold text-base ${lato.className}`}
        >
          Portfolios
        </h1>

        <div className="w-full mt-4">
          <img src="../portfolio/picture-1.png" className="w-full h-auto"></img>
        </div>
        <div className="flex-row items-center my-8 px-3 flex gap-8 justify-between">
          <div className="bg-none text-amber-600 border-amber-600 border rounded-full p-3">
            <MdOutlineArrowBack className="w-[15px] h-[15px]" />
          </div>
          <h1 className={`font-bold uppercase text-2xl ${rubik.className}`}>
            Project Name
          </h1>
          <div className="bg-none text-amber-600 border-amber-600 border rounded-full p-3">
            <MdOutlineArrowForward className="w-[15px] h-[15px]" />
          </div>
        </div>
        <div className={`text-black/50 text-[13px] px-[18px] text-center mt-[30px] mb-[75px]  ${lato.className}`}>
        <p className="w-[330px]">
          Collaboration is at the heart of our agency. We foster open
          communication, embracing the ideas and input of our clients throughout
          the design process.Collaboration is at the heart of our agency. We
          foster open communication, embracing the ideas and input of our
          clients throughout the design process.Collaboration is at the heart of
          our agency. We foster open communication, embracing the ideas and
          input of our clients throughout the design process.
        </p>  
        </div>

      </div>
    </div>
  );
};

export default Carousel;
