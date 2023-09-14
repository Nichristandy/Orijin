import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets:['latin'],
})

const Footer = () => {
  return (
    <div>
      <div className="w-full sticky z-10 ">
        <div className="flex flex-col bg-[#212B31] w-full">
          <div className="flex flex-col py-[30px] md:pt-6 md:pb-6 md:pl-9 md:pr-[60px]  lg:pl-[72px] lg:pr-[120px] md:border-b border-amber-600 md:flex-row text-white lg:pt-12 lg:pb-[43px] items-center  justify-between">
            <img src="../logo-putih.svg"></img>
            <div className="flex flex-col text-center md:text-left justify-center  md:flex-row w-full md:w-2/5 items-center md:justify-between text-xs">
              <div className="flex flex-col mt-[30px] md:mt-0 w-full md:w-1/2">
                <p>+62 21-2904-4395</p>
                <p className="md:mt-3">hi@orijinsupremasi.id</p>
              </div>
              <div className={`flex flex-col text-xs items-center md:items-baseline mt-[30px] md:mt-0 w-[57%] md:w-1/2 ${inter.className}`}>
                <p className="font-bold">Graha Sumartadinata</p>
                <p className="w-full md:w-9/12">
                  Jl Ciputat Raya No.102, Kebayoran Lama Jakarta Selatan, DKI
                  Jakarta 122040
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-[12px] text-center lg:text-left md:text-base md:pl-[72px] pt-6 pb-[30px] text-white">
            <p>
            © 2023 by ORIGIN, PT Orijin Supremasi Ventura
            </p>
               
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
