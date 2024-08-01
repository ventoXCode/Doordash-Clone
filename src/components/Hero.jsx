import React from "react";
import Logo from "@assets/logoSm.svg?react";
import FullLogo from "@assets/logoFull.svg?react";
import background from "@assets/hero_desktop.webp";
import { ArrowRight, MapPin, User, Search } from "lucide-react";

function Hero() {
  return (
    <div
      id="hero"
      className="h-fit bg-cover bg-no-repeat relative bg-center overflow-sroll"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="pt-4 px-2 md:h-[650px] h-[550px]">
        <div className="flex justify-end items-center pr-4 gap-2">
          <button className="font-bold md:px-3 px-3 md:py-[7px] py-[4px] rounded-full text-center md:bg-[#eb1700] md:text-white bg-white min-h-dvh:text-white md:text-[18px] text-[16px]">
            <span className="hidden md:block">Sign In</span>
            <span className="md:hidden">Login</span>
          </button>
          <button className="font-bold md:px-3 px-3 md:py-[7px] py-[4px] rounded-full text-center md:bg-white bg-[#eb1700] md:text-[#606060] text-white md:text-[18px] text-[16px]">
            <span className="hidden md:block">Sign Up</span>
            <span className="md:hidden">Open App</span>
          </button>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center my-6 absolute md:top-0 lg:right-[calc(50%-6.5rem)] max-w-[152px] lg:max-w-full top-[calc(25%+1rem)]">
              <Logo />
              <FullLogo />
            </div>
            <div className="flex flex-col items-center">
              <p className="md:text-[40px] text-white lg:leading-10 text-center font-bold md:mt-[208px] mt-[170px] -tracking-[0.01px] mb-6 antialiased w-[350px] md:w-full text-[22px] leading-tight">
                Discover restaurants and more near you.
              </p>
              <div className="flex bg-white rounded-full md:pl-5 pl-4 md:p-2 p-1 items-center lg:w-[55%] justify-between border-transparent border-2 focus-within:border-2 focus-within:border-[#4969f5]  md:min-w-[408px] w-[286px]">
                <div className="flex">
                  <MapPin
                    className="mr-3 hidden md:block"
                    height={24}
                    width={24}
                  />
                  <Search className="mr-3 md:hidden" height={24} width={24} />
                  <input
                    type="text"
                    placeholder="Enter delivery address"
                    className="outline-none placeholder:font-semibold"
                  ></input>
                </div>
                <div className="lg:bg-[#eb1700] rounded-full p-2 hover:cursor-pointer">
                  <ArrowRight className="lg:text-white black" />
                </div>
              </div>
              <button className="flex mt-4 bg-white rounded-full px-3 items-center font-semibold text-sm py-1 hover:cursor-pointer">
                <User height={16} width={16} className="mr-1" />
                <span className="hidden md:block">Sign in</span>
                <span className="md:hidden">Login</span>
                <span className="hidden lg:block ml-1">for saved address</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
