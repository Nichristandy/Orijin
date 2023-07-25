import React from "react";
import { Lato } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="w-full pt-5 sticky flex flex-row items-center justify-between">
        <img src="../../logo-orijin.svg" className="h-8 md:h-10"></img>

        <div
          className={`hidden lg:flex flex-row w-2/6 font-bold text-lg pr-[35px] justify-between ${lato.className}`}
        >
          <div>About Us</div>
          <div>Our Service</div>
          <div>Portfolios</div>
        </div>
        <div className=" flex p-3  lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-[#DF7A20] focus:outline-none focus:ring-offset-2 focus:ring-offset-[#DF7A20] focus:ring-[#DF7A20]"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* tking icon from w3 website */}
            {/* d = shape code */}
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" // for menu shape
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" //for cross shape
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          //handle the mobile menu tabs
          <div className="lg:hidden id=mobile-menu">
            <div
              ref={ref}
              className=" pt-2 pb-3 flex flex-col  justify-center space-y-1 sm:px-3"
            >
              <Link
                href="/"
                className="p-4 bg-white shadow-sm hover:text-white hover:bg-[#212B31] text-center text-lg"
              >
                About us
              </Link>
              <Link
                href="/"
                className="p-4 bg-white shadow-sm hover:text-white hover:bg-[#212B31] text-center text-lg"
              >
                Our Services
              </Link>
              <Link
                href="/"
                className="p-4 bg-white shadow-sm hover:text-white hover:bg-[#212B31] text-center text-lg"
              >
                Portfolios
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Navbar;
