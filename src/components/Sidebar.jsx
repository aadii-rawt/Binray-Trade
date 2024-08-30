import React from "react";
import { BiSolidCoinStack } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoIosSettings, IoMdMenu, IoMdTrophy } from "react-icons/io";
import {
  MdAnalytics,
  MdContactSupport,
  MdOutlineZoomInMap,
} from "react-icons/md";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useData } from "../context/dataContext";
import { GoMute } from "react-icons/go";

function Sidebar({ setIsSettingOpen, setIsSupportOpen, setIsMoreOpen }) {
  const { mediaStream, setMediaStream } = useData();
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  }
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white p-2 relative min-h-screen">
      <ul className="space-y-2 text-[8px] font-semibold text-center">
        <li className="flex flex-col items-center p-1.5  w-12 rounded-sm">
          <IoMdMenu size={20} className="text-red-800 dark:text-white" />{" "}
        </li>
        <li className="flex flex-col items-center p-1.5 dark:hover:bg-blue-700 hover:bg-red-50 rounded-sm cursor-pointer">
          <Link to="/" className="flex flex-col items-center">
            <MdAnalytics size={20} className="text-red-800 dark:text-white" />
            <span>TRADE</span>
          </Link>
        </li>
        <li
          className="flex flex-col items-center p-1.5  dark:hover:bg-blue-700 hover:bg-red-50 w-12 rounded-sm cursor-pointer"
          onClick={() => setIsSupportOpen((prev) => !prev)}
        >
          <MdContactSupport
            size={20}
            className="text-red-800 dark:text-white"
          />
          <span>SUPPORT</span>
        </li>
        <li className="flex flex-col items-center p-1.5 dark:hover:bg-blue-700 hover:bg-red-50 w-12 rounded-sm cursor-pointer">
          <Link to="account" className="flex flex-col items-center">
            <FaUser size={20} className="text-red-800 dark:text-white" />
            <span>ACCOUNT</span>
          </Link>
        </li>
        <li className="flex flex-col items-center p-1.5 dark:hover:bg-blue-700 hover:bg-red-50 w-12 rounded-sm cursor-pointer">
          <Link to="tournament" className="flex flex-col items-center">
            <IoMdTrophy size={20} className="text-red-800 dark:text-white" />
            <span>TOURNA-MENTS</span>
          </Link>
        </li>
        <li className="flex flex-col items-center p-1.5 dark:hover:bg-blue-700 hover:bg-red-50 w-12 rounded-sm cursor-pointer">
          <Link to="market" className="flex flex-col items-center">
            <BiSolidCoinStack
              size={20}
              className="text-red-800 dark:text-white"
            />
            <span>MARKET</span>
          </Link>
        </li>
        <li
          className="flex flex-col items-center p-1.5 dark:hover:bg-blue-700 hover:bg-red-50 w-12 rounded-sm cursor-pointer"
          onClick={() => setIsMoreOpen(true)}
        >
          <HiDotsHorizontal
            size={20}
            className="text-red-800 dark:text-white"
          />
          <span>MORE</span>
        </li>
      </ul>
      <ul className="space-y-2  font-semibold absolute bottom-3">
        <li className="flex flex-wrap gap-1 items-center p-1.5 w-12 rounded-sm">
          <MdOutlineZoomInMap
            size={15}
            onClick={toggleFullscreen}
            className="cursor-pointer"
          />{" "}
          <TiArrowLeftThick size={15} />{" "}
          <IoIosSettings
            size={15}
            className="cursor-pointer"
            onClick={() => setIsSettingOpen((prev) => !prev)}
          />{" "}
          <span onClick={() => setMediaStream((prev) => !prev)} className="cursor-pointer">
            {mediaStream ? (
              <HiOutlineSpeakerWave size={15} />
            ) : (
              <GoMute size={15} />
            )}
          </span>
        </li>
        <li className="flex items-center justify-center text-[10px] bg-green-700  text-center p-1.5 w-12 h-10 rounded-sm">
          Help
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
