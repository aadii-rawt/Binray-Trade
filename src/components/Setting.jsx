import React from "react";
import { createPortal } from "react-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useData } from "../context/dataContext";

function Setting({setIsSettingOpen}) {

  const {chartTheme,setChartTheme} = useData()

    const DarkTheme = () => {
      const elelm = document.getElementById("html").classList.add("dark");
      // setChartTheme("#0F172A")  
      setChartTheme(prev => ({ background: "#0F172A",
        text: "#FFFFFF"}))
    }
    const removeDarkTheme = () => {
      const elelm = document.getElementById("html").classList.remove("dark")
      setChartTheme(prev => ({ background: "#FFFFFF",
        text: "#121212"}))
    }
  return createPortal(
    <div className="absolute z-50 h-full top-0 left-0 w-full bg-slate-200/65 dark:bg-slate-900/80 text-black dark:text-white transition-all duration-500" onClick={() => setIsSettingOpen(false)}>
      <div className="py-2 px-3 w-[20%] h-full bg-white dark:bg-slate-800 text-black dark:text-white" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between font-bold text-sm">
          <span>Setting</span> <span onClick={() => setIsSettingOpen(false)} className="cursor-pointer"><MdOutlineCancel /></span>
        </div>
        <div>
          <div>
            <span className="text-[10px] text-gray-500">Language</span>
            <div className="border border-gray-500 rounded flex items-center justify-between text-sm px-3 py-2">
              <span>English</span> <span>+</span>
            </div>
          </div>
          <div>
            <span className="text-[10px] text-gray-500">TimeZone</span>
            <div className="border border-gray-500 rounded flex items-center justify-between text-sm px-3 py-2">
              <span>(UTC+00:00)</span> <span>+</span>
            </div>
          </div>
        </div>
        <div className="space-y-3 my-3">
          <h1 className="text-[8px] font-bold">TEMPLATE</h1>
          <div className="rounded-3xl border border-blue-800 p-1.5 text-xs flex gap-3 cursor-pointer" onClick={removeDarkTheme}>
            <img src="sun.png" alt="" className="w-5" />
            <span>Light Mode</span>
          </div>
          <div className="rounded-3xl border border-blue-800 p-1.5 text-xs flex gap-3">
            <img src="twiling.png" alt="" className="w-5" />
            <span>Twilight</span>
          </div>
          <div className="rounded-3xl border border-blue-800 p-1.5 text-xs flex gap-3 cursor-pointer" onClick={DarkTheme}>
            <img src="moon.png" alt="" className="w-5" />
            <span>Full Night</span>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-[8px] font-bold">PLATFORM</h1>
          <div>
            <p className="text-[10px] text-gray-500">Grids opacity</p>
            <div className="flex items-center justify-between rounded-md text-center border border-gray-400 py-1.5 px-3">
              <span className="bg-gray-300 dark:bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                -
              </span>
              <span className="text-sm">$ </span>
              <span className="bg-gray-300 dark:bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                +
              </span>
            </div>
          </div>
        </div>
        <div className="text-xs space-y-3 my-3">
          <div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="auto-scrolling" />
              <label htmlFor="auto-scrolling" className="font-semibold">
                Auto-scrolling
              </label>
            </div>
            <p className="text-[9px] text-gray-500 font-medium">
              Automatic graphic scrolling
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="auto-scrolling" />
              <label htmlFor="auto-scrolling" className="font-semibold">
                1-click trade
              </label>
            </div>
            <p className="text-[9px] text-gray-500 font-medium">
              Open trades without confirmation
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Setting;
