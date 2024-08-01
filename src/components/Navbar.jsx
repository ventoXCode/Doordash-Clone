import React, { useState, useEffect } from "react";
import LogoSm from "@assets/navLogo.svg?react";
import clsx from "clsx";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("hero");
      const heroHeight = heroElement.offsetHeight;
      const scrollPosition = window.scrollY;
      if (scrollPosition > heroHeight * 0.25) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "w-full bg-white fixed top-0 px-12 py-4 items-center justify-between z-50 duration-300 ease-in-out delay-0 ",
        isVisible ? "flex" : "hidden"
      )}
    >
      <div>
        <LogoSm />
      </div>
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
    </div>
  );
};

export default Navbar;
