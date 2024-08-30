import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Profitbar from "./Profitbar";
import TradeList from "./TradeList";

function TradePair() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-3 z-40 flex relative flex-col items-center gap-5 h-full">
      <button
        className="w-8 h-8  rounded-md bg-blue-700 text-white flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaPlus size={14} />
      </button>
      {isOpen && <TradeList setIsOpen={setIsOpen} />}

      <Profitbar />
    </div>
  );
}

export default TradePair;
