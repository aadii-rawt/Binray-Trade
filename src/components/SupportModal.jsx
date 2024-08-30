import React from "react";
import { createPortal } from "react-dom";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { IoGrid } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function SupportModal({setIsSupportOpen}) {
  return createPortal(
    <div
      className="absolute h-full z-50 top-0 left-0 w-full bg-slate-200/65 dark:bg-slate-900/80 text-black dark:text-white transition-all duration-500"
      onClick={() => setIsSupportOpen(false)}>
      <div
        className="py-2 px-3 w-[20%] h-full bg-white dark:bg-slate-800 text-black dark:text-white"
        onClick={(e) => e.stopPropagation()} >
         <div className="flex items-center justify-between font-bold text-sm">
          <span>Support</span> <span onClick={() => setIsSupportOpen(false)} className="cursor-pointer"><RxCross2 /></span>
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-5 my-3">
          <div className="flex w-full space-y-1.5 flex-col items-center justify-center border-b border-gray-300 pb-4">
          <IoGrid  size={24} className="dark:text-blue-800"/>
          <h1 className="font-bold text-sm">FAQ</h1>
          <p className="text-xs text-gray-500 font-medium">Open the database</p>
          </div>
          <div className="flex w-full space-y-1.5 flex-col items-center justify-center border-b border-gray-300 pb-4">
          <GiGraduateCap  size={24} className="dark:text-blue-800"/>
          <h1 className="font-bold text-sm">FAQ</h1>
          <p className="text-xs text-gray-500 font-medium">Open the database</p>
          </div>
          <div className="flex w-full space-y-1.5 flex-col items-center justify-center border-b border-gray-300 pb-4">
          <FaHeadphonesAlt  size={24} className="dark:text-blue-800"/>
          <h1 className="font-bold text-sm">FAQ</h1>
          <p className="text-xs text-gray-500 font-medium">Open the database</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default SupportModal;
