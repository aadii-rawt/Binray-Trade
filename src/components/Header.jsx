import React, { useState } from "react";
import { FaPlus, FaRegBell } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoIosSend } from "react-icons/io";
import AccountCart from "./AccountCart";
import { Link } from "react-router-dom";
import { useData } from "../context/dataContext";

function Header() {
  const [isOpen,setIsOpen] = useState(false)
  const {wallet} = useData()
  return (
    <div className="w-full bg-white dark:bg-slate-900 flex gap-3 items-center justify-between p-2 text-xs font-semibold">
      <img
        className="w-7"
        src="https://qx-platform.com/wp-content/uploads/2024/07/quotex-logo.webp"
        alt=""
      />
      <div className=" flex gap-3 items-center ">
        <button className="w-8 h-8  bg-gray-300  dark:bg-slate-800 text-black dark:text-white flex items-center hover:bg-slate-950  justify-center rounded">
          <FaRegBell />
        </button>
        <div className="relative cursor-pointer" >
          <div onClick={() => setIsOpen(!isOpen)} className="h-8 bg-gray-300  dark:bg-slate-800 text-black dark:text-white  px-4 py-1 rounded flex gap-2 items-center justify-around ">
            <IoIosSend color="green" size={18} /> <span>$ {wallet}</span>
            <div>
              {isOpen ?  <IoIosArrowUp /> :   <IoIosArrowDown />}
            </div>
          </div>
          {isOpen &&  <AccountCart className="" />} 
        </div>
        <Link to="deposit" className="h-8 bg-green-700 px-4 py-1 rounded flex gap-2 items-center">
          {" "}
          <FaPlus size={8} /> Deposit
        </Link>
        <Link  to="new" className="h-8 bg-gray-300  dark:bg-slate-800 text-black dark:text-white px-4 py-1 rounded">
          Withdrawal
        </Link>
      </div>
    </div>
  );
}

export default Header;
