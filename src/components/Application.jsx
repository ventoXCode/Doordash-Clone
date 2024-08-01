import React from "react";
import { useState, useEffect } from "react";
import AppDownload from "./AppDownload";
import scooter from "@assets/scooter.svg";
import store from "@assets/storefront.svg";
import phone from "@assets/phone.svg";
import { ArrowRight } from "lucide-react";

const Application = () => {
  const content = [
    {
      image: scooter,
      header: "Become a Dasher",
      text: "As a delivery driver, make money and work on your schedule. Sign up in minutes.",
      button: "Start earning",
    },
    {
      image: store,
      header: "Become a Merchant",
      text: "Attract new customers and grow sales, starting with 0% commissions for up to 30 days.",
      button: "Sign up for DoorDash",
    },
    {
      image: phone,
      header: "Get the best DoorDash experience",
      text: "Experience the best your neighborhood has to offer, all in one app.",
      button: "Get the app",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center xl:my-20">
      <div className="md:hidden">
        <AppDownload />
      </div>
      <div className="mt-10 xl:flex mx-auto">
        {content.map(({ image, header, text, button }, index) => (
          <div key={index} className="flex xl:flex-col xl:items-center p-4">
            <div className="mr-8 xl:mr-0 xl:min-w-[360px] flex justify-center">
              <img
                src={image}
                alt="image"
                className="h-[88px] md:h-[124px] w-[88px] md:w-[124px] xl:h-[154px] xl:w-[154px]"
              />
            </div>
            <div className="max-w-[250px] xl:flex xl:flex-col xl:text-center">
              <p className="text-[32px] font-bold leading-tight">{header}</p>
              <p className="text-[#191919] text-[18px] mt-2">{text}</p>
              <button className="mt-3 text-[#eb1700] flex items-center gap-1 font-bold text-[14px] justify-center xl:text-[18px]">
                {button}
                <ArrowRight height={16} width={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
