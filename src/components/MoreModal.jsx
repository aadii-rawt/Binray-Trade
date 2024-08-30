import React from "react";
import { createPortal } from "react-dom";
import { HiMiniSignalSlash } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SiGoogleanalytics, SiTopdotgg } from "react-icons/si";

function MoreModal({ setIsMoreOpen }) {
  console.log("helo");
  return createPortal(
    <div
      className="absolute h-full z-50 top-0 left-0 w-full bg-slate-200/65 dark:bg-slate-900/80 text-black dark:text-white transition-all duration-500"
      onClick={() => setIsMoreOpen(false)}
    >
      <div
        className="py-2 px-3 w-[20%] h-full bg-white dark:bg-slate-800 text-black dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between font-bold text-base">
          <span>Support</span>{" "}
          <span onClick={() => setIsMoreOpen(false)} className="cursor-pointer">
            <RxCross2 />
          </span>
        </div>
        <div>
          <div className="">
            <div className="flex bg-slate-700 rounded p-2.5 w-full items-center justify-between my-3">
              <p className="flex items-center gap-2"> <SiGoogleanalytics /> <span>Analytics</span></p>
              <p><MdKeyboardArrowRight /></p>
            </div>
            <div className="flex bg-slate-700 rounded p-2.5 w-full items-center justify-between my-3">
              <p className="flex items-center gap-2"> <SiTopdotgg /> <span>Top</span></p>
              <p><MdKeyboardArrowRight /></p>
            </div>
            <div className="flex bg-slate-700 rounded p-2.5 w-full items-center justify-between my-3">
              <p className="flex items-center gap-2"> <HiMiniSignalSlash /> <span>Signals</span></p>
              <p><MdKeyboardArrowRight /></p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default MoreModal;
