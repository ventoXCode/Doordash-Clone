import DDLogo from "@assets/gpDoordash.svg?react";
import GooglePlay from "@assets/GPLogo.svg?react";
import { ArrowRight } from "lucide-react";

const AppDownload = () => {
  return (
    <div>
      <div className="p-5 m-5 mb-0 bg-[#f7f7f7] flex rounded-xl max-w-full w-[360px]">
        <div className="bg-white rounded-xl p-2 mr-2 w-fit h-fit">
          <DDLogo />
        </div>
        <div>
          <GooglePlay />
          <p className="text-[#191919] text-[18px] font-bold">DoorDash App</p>
          <p className="text-[14px] text-[#606060] font-semibold mb-2">
            Food & Groceries, Delivered
          </p>
          <button className="bg-[#eb1700] text-white flex justify-center items-center px-3 rounded-full font-bold text-[14px] py-[5px]">
            Get the App
            <ArrowRight height={16} width={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
