import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useData } from "../context/dataContext";
import { currencyData } from "../util.js";

function TradeList({ setIsOpen }) {
  const { openChart, setOpenChart, NZD_CAD_Data, setChartData } = useData();
  const { currentOpenedChart, setCurrentOpenedChart } = useData();

  function changeCurrency(changedCurrency) {
    const exists = openChart.some((chart) => chart.id === changedCurrency.id);

    if (exists) {
      setIsOpen(false);
      return openChart;
    } else {
      setOpenChart((prev) => [...prev, changedCurrency]);
      setCurrentOpenedChart(changedCurrency)
      setIsOpen(false);
    }
  }

  return (
    <div className="absolute w-[450px] h-[88%] top-12 left-0 bg-gray-200 text-black dark:text-white dark:bg-[#191919] px-2  rounded-md overflow-y-scroll">
      <div>
        <div className="sticky inset-0 bg-gray-200 text-black dark:text-white dark:bg-[#191919] py-2">
          <h1 className="flex items-center justify-between text-sm font-semibold">
            Select trade pair{" "}
            <span>
              <MdOutlineCancel
                size={18}
                className="cursor-pointer text-white"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            </span>
          </h1>
          <ul className="flex text-[9px] font-semibold my-3 gap-1">
            <li className="bg-blue-700 py-0.5 px-1 rounded-md">CURRENICIES</li>
            <li className=" py-0.5 px-1 rounded-md">CRYPTO</li>
            <li className=" py-0.5 px-1 rounded-md">COMMODITIES</li>
            <li className=" py-0.5 px-1 rounded-md">STOCKS</li>
          </ul>
          <div className="border-b border-gray-500 pb-2">
            <div className="text-xs text-gray-400 grid grid-cols-5 items-center">
              <span className="col-span-2">Name</span> <span>24 changing</span>{" "}
              <span>Profit 1+ min</span>
              <span>5+ min</span>
            </div>
          </div>
        </div>
        <div className="trade-list space-y-1">
          {currencyData.map((currency, index) => {
            return (
              <div
                key={index}
                className="text-[15px] cursor-pointer py-1 px-1 rounded-sm hover:bg-slate-800 font-semibold grid grid-cols-5 items-center"
                onClick={() => changeCurrency(currency)}
              >
                <p className="col-span-2">{currency.pair}</p>
                <p className="text-green-500">{currency.change}</p>
                <p className="text-orange-500">{currency.payout1}</p>
                <p className="text-orange-500">{currency.payout2}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TradeList;
