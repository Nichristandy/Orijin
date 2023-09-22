import React from "react";
import { Rubik, Lato } from "next/font/google";
import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";
import { useState, useEffect } from "react";

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
  const [curr, setCurr] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Set the animation duration in milliseconds
    return () => clearTimeout(timer);
  }, [curr]);

  const data = [
    {
      id: 1,
      title: "CIMB Niaga",
      description:
        "Our collaboration with CIMB Niaga, a prominent financial institution, underscores our unwavering commitment to excellence. We had the privilege of partnering with CIMB Niaga to transform their office space, aligning it with their core values while fostering creativity and boosting productivity. This project serves as a testament to our capacity to comprehend and fulfill our clients' distinct requirements, regardless of project scale or complexity.",
      image1: "./portfolio/CIMB-1.png",
      image2: "./portfolio/CIMB-2.png",
      image3: "./portfolio/CIMB-3.png",
      image4: "./portfolio/CIMB-4.png",
    },
    {
      id: 2,
      title: "Barrier Gate",
      description:
        "We embark on an ongoing journey to enhance mill security with our Barrier Gate System project. We provide continuous support, maintenance, and improvements, ensuring your access control system remains cutting-edge. With RFID technology and efficient recording, streamline user flow while fortifying risk management. Elevate safety standards, optimize operations, and secure your mill's future with our ongoing project.",
      image1: "../portfolio/barrier-gate-1.svg",
      image2: "../portfolio/barrier-gate-2.svg",
      image3: "../portfolio/barrier-gate-3.svg",
      image4: "../portfolio/barrier-gate-4.svg",
    },
  ];

  const prev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));
    }
  };
  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));
    }
  };
  const currentItem = data[curr];

  return (
    <div>
      {/* desktop */}
      <div className="hidden md:flex flex-row items-center w-full gap-12">
        {/* sisi kiri */}

        <div className="flex flex-col w-5/12">
          <h1 className={`font-bold text-2xl ${rubik.className}`}>Portfolio</h1>
          <div
            className={`flex flex-row items-center mt-14 ${
              isAnimating
                ? "opacity-0 ease-in-out"
                : "duration-500 ease-in-out opacity-100"
            } `}
          >
            <h1
              className={`font-bold md:text-2xl lg:text-3xl text-[#212B31]/50 ${rubik.className}`}
            >
              0{currentItem.id}
            </h1>
            <div className="h-[1px] ml-[30px] bg-amber-600 w-3/4"></div>
          </div>
          <div className="flex flex-col w-full mt-10">
            <h1
              className={`font-bold uppercase w-1/4 md:text-2xl lg:text-3xl ${
                isAnimating
                  ? "opacity-0 ease-in-out "
                  : "duration-500 ease-in-out opacity-100"
              } ${rubik.className}`}
            >
              {currentItem.title}
            </h1>
            <p
              className={`text-black/50 md:mt-6 md:w-full lg:w-[80%] lg:mt-[38px] ${
                isAnimating
                  ? "opacity-0 ease-in-out"
                  : "duration-500 ease-in-out opacity-100"
              } ${lato.className}`}
            >
              {currentItem.description}
            </p>
          </div>
          <div className="flex flex-row w-1/4 gap-3 mt-12">
            <button
              onClick={prev}
              disabled={isAnimating}
              className="bg-none cursor-pointer text-amber-600 border-amber-600 border rounded-full p-3 active:border-amber-300 active:text-amber-300"
            >
              <MdOutlineArrowBack className="w-[15px] h-[15px]" />
            </button>
            <div
              onClick={next}
              disabled={isAnimating}
              className="bg-none cursor-pointer text-amber-600 border-amber-600 border rounded-full p-3 active:border-amber-300 active:text-amber-300"
            >
              <MdOutlineArrowForward className="w-[15px] h-[15px] " />
            </div>
          </div>
        </div>
        {/* sisi kanan */}
        <div
          className={`flex flex-col w-7/12 ${
            isAnimating
              ? "opacity-0 ease-in-out"
              : "duration-500 ease-in-out opacity-100"
          }`}
        >
          <img src={currentItem.image1} className="w-full h-auto"></img>
          <div className="flex flex-row gap-14 mt-7">
            <div className="w-1/3 h-auto">
              <img src={currentItem.image2}></img>
            </div>
            <div className="w-1/3 h-auto">
              <img src={currentItem.image3}></img>
            </div>
            <div className="w-1/3 h-auto">
              <img src={currentItem.image4}></img>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex flex-col sticky z-0 w-full justify-center items-center md:hidden">
        <div className="w-full px-3">
          <div className="w-full border-r border-l flex text-center justify-center pt-[30px] pb-4 border-amber-600/20">
            <h1
              className={`text-black/50 uppercase font-bold text-base ${lato.className}`}
            >
              Portfolios
            </h1>
          </div>
        </div>

        <div
          className={`w-full ${
            isAnimating
              ? "opacity-0 ease-in-out"
              : "duration-500 ease-in-out opacity-100"
          }`}
        >
          <img src={currentItem.image1} className="w-full h-auto"></img>
        </div>
        <div className="w-full px-3">
          <div className="flex-row items-center py-8 border-r border-l border-amber-600/20 flex gap-8 justify-between">
            <button
              onClick={prev}
              className="bg-none text-amber-600 border-amber-600 border rounded-full p-3"
            >
              <MdOutlineArrowBack className="w-[15px] h-[15px]" />
            </button>
            <h1 className={`font-bold uppercase text-2xl ${rubik.className}`}>
              {currentItem.title}
            </h1>
            <button
              onClick={next}
              className="bg-none text-amber-600 border-amber-600 border rounded-full p-3"
            >
              <MdOutlineArrowForward className="w-[15px] h-[15px]" />
            </button>
          </div>
        </div>

        <div className="w-full  px-3">
          <div
            className={`text-black/50 flex items-center justify-center text-[13px] px-[18px] border-r border-l border-amber-600/20 text-center pt-[30px] pb-[75px] ${
              isAnimating
                ? "opacity-0 ease-in-out"
                : "duration-500 ease-in-out opacity-100"
            } ${lato.className}`}
          >
            <p className="w-[330px]">{currentItem.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
