import React from "react";
import { useData } from "../context/dataContext";
import { RxCross2 } from "react-icons/rx";
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";
// import {IoIosCloseCircleOutline} from 'react-icons'

function OpenedCurrency() {
  const { openChart, setOpenChart } = useData();
  const { currentOpenedChart, setCurrentOpenedChart } = useData();

  function handleChart(clickedChart) {
    if (clickedChart.id === currentOpenedChart.id) {
      const currentIndex = openChart.findIndex(
        (item) => item.id === clickedChart.id
      );
      const previousIndex =
        currentIndex > 0 ? currentIndex - 1 : openChart.length - 1;
      setCurrentOpenedChart(openChart[previousIndex]);
    } else {
      setCurrentOpenedChart(clickedChart);
    }
  }

  function handleRemoveChart(chart) {
    const currentIndex = openChart.findIndex((item) => item.id === chart.id);

    if (chart.id === currentOpenedChart.id) {
      const previousIndex =
        currentIndex > 0 ? currentIndex - 1 : openChart.length - 2;
      setCurrentOpenedChart(openChart[previousIndex] || openChart[0] || {});
    }
    setOpenChart((prev) => prev.filter((item) => item.id !== chart.id));
  }

  return (
    <div className="absolute left-0 top-0 z-10 p-2 flex items-center gap-3">
      {openChart.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              currentOpenedChart.id === item.id
                ? "bg-slate-500 dark:bg-slate-950"
                : "bg-slate-300 dark:bg-slate-600"
            } px-5 py-1 rounded-sm cursor-pointer group`}
            onClick={() => handleChart(item)}
          >
            <div className="relative">
              <p className="text-xs font-semibold">{item.pair}</p>
              <p className="text-xs text-orange-500 font-semibold">
                {item.payout1}%
              </p>
              {openChart.length > 1 && (
                <div className="absolute -right-6 -top-3 z-10 flex flex-col">
                  <span
                    className={`${
                      currentOpenedChart.id === item.id
                        ? "bg-slate-500 dark:bg-slate-950"
                        : "bg-slate-300 dark:bg-slate-600"
                    } p-1 hidden  rounded-full border  hover:bg-blue-700 group-hover:flex items-center justify-center text-[9px]`}
                    onClick={() => handleRemoveChart(item)}
                  >
                    <RxCross2 />
                  </span>
                  <span
                    className={`${
                      currentOpenedChart.id === item.id
                        ? "bg-slate-500 dark:bg-slate-950"
                        : "bg-slate-300 dark:bg-slate-600"
                    } p-1 hidden  rounded-full border  hover:bg-blue-700 group-hover:flex items-center justify-center text-[9px]`}
                  >
                    <BsPinAngleFill />
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OpenedCurrency;
