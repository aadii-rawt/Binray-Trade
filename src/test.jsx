


import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import { FaBoxOpen } from "react-icons/fa";
import { useData } from "../context/dataContext";
import TradePair from "./TradePair";

const CandlestickChart = () => {
  const chartContainerRef = useRef(null);
  const candlestickSeriesRef = useRef(null);
  const chartRef = useRef(null);
  const { chartTheme } = useData();
  const betaudio = useRef();
  const resultAudio = useRef();

  const [time, setTime] = useState(4); // Timeframe in seconds
  const [investment, setInvestment] = useState(20);
  const lastBarRef = useRef(null);
  const currentTimestampRef = useRef(Math.floor(Date.now() / 1000));

  const [trade, setTrade] = useState(null); // State to track current trade
  const [initialTimeRange, setInitialTimeRange] = useState(null);

  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: chartTheme.text,
        background: { type: "solid", color: chartTheme.background },
      },
      grid: {
        vertLines: {
          color: "rgba(256,256,256,10%)",
        },
        horzLines: {
          color: "rgba(256,256,256,10%)",
        },
      },
    };

    const chart = createChart(chartContainerRef.current, chartOptions);
    chartRef.current = chart; // Store the chart instance

    candlestickSeriesRef.current = chart.addCandlestickSeries({
      upColor: "#15803D",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#15803D",
      wickDownColor: "#ef5350",
    });

    const initialData = [
      { time: 1693518000, open: 110, high: 115.76, low: 108.85, close: 112.95 },
      { time: 1693521600, open: 112.95, high: 113.3, low: 99.46, close: 103.58 },
      { time: 1693525200, open: 103.58, high: 112.01, low: 102.37, close: 111.84 },
      { time: 1693528800, open: 111.84, high: 116.65, low: 109.8, close: 113.34 },
      { time: 1693532400, open: 113.34, high: 122.72, low: 96.75, close: 106.28 },
      { time: 1693536000, open: 106.28, high: 109.95, low: 92.0, close: 96.6 },
      { time: 1693539600, open: 96.6, high: 103.66, low: 88.77, close: 103.44 },
      { time: 1693543200, open: 103.44, high: 110.26, low: 97.71, close: 108.08 },
      { time: 1693546800, open: 108.08, high: 117.41, low: 101.01, close: 101.74 },
      { time: 1693550400, open: 101.74, high: 107.36, low: 94.15, close: 100.96 },
      { time: 1693554000, open: 100.96, high: 109.9, low: 93.23, close: 108.44 },
      { time: 1693557600, open: 108.44, high: 119.01, low: 102.71, close: 115.1 },
      { time: 1693561200, open: 115.1, high: 119.35, low: 98.49, close: 106.29 },
      { time: 1693564800, open: 106.29, high: 116.06, low: 95.25, close: 99.74 },
      { time: 1693568400, open: 99.74, high: 102.39, low: 91.92, close: 100.23 },
      { time: 1693572000, open: 100.23, high: 102.57, low: 91.37, close: 96.41 },
      { time: 1693575600, open: 96.41, high: 98.66, low: 78.47, close: 86.98 },
      { time: 1693579200, open: 86.98, high: 88.71, low: 82.98, close: 87.44 },
      { time: 1693582800, open: 87.44, high: 100.47, low: 86.77, close: 92.05 },
      { time: 1693586400, open: 92.05, high: 95.11, low: 80.45, close: 89.78 },
    ];

    candlestickSeriesRef.current.setData(initialData);
    lastBarRef.current = initialData[initialData.length - 1];

    // Store initial visible range
    const initialRange = {
      from: initialData[initialData.length - 15].time,
      to: initialData[initialData.length - 1].time,
    };
    setInitialTimeRange(initialRange);

    chart.timeScale().setVisibleRange(initialRange);

    const updateCurrentBar = () => {
      const newPrice = lastBarRef.current.close + (Math.random() - 0.5) * 2;
      lastBarRef.current = {
        ...lastBarRef.current,
        high: Math.max(lastBarRef.current.high, newPrice),
        low: Math.min(lastBarRef.current.low, newPrice),
        close: newPrice,
      };

      candlestickSeriesRef.current.update(lastBarRef.current);

      if (trade) {
        if (trade.countdown > 1) {
          setTrade((prevTrade) => ({
            ...prevTrade,
            countdown: prevTrade.countdown - 1,
          }));
        } else {
          const newValue = lastBarRef.current.close;
          const isWin =
            (trade.type === "up" && newValue > trade.startValue) ||
            (trade.type === "down" && newValue < trade.startValue);

          console.log(isWin ? "Win" : "Lose");
          setTrade(null); // Reset trade
          resultAudio.current.play();
          console.log("new value  :", newValue);
        }
      }
    };

    const createNewBar = () => {
      const newTimestamp = currentTimestampRef.current + 60;
      const newBar = {
        time: newTimestamp,
        open: lastBarRef.current.close,
        high: lastBarRef.current.close,
        low: lastBarRef.current.close,
        close: lastBarRef.current.close,
      };

      lastBarRef.current = newBar;
      candlestickSeriesRef.current.update(newBar);
      currentTimestampRef.current = newTimestamp;

      // Remove auto zoom
      // const newVisibleRange = chart.timeScale().getVisibleRange();
      // if (newVisibleRange.to !== newTimestamp) {
      //   chart.timeScale().scrollToRealTime();
      // }
    };

    const updateInterval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      if (now >= currentTimestampRef.current + 60) {
        createNewBar();
      } else {
        updateCurrentBar();
      }
    }, 1000);

    return () => {
      clearInterval(updateInterval);
      chart.remove();
    };
  }, [chartTheme, trade]);

  const handleTrade = (type) => {
    if (!trade) {
      const startValue = lastBarRef.current.close;
      setTrade({ type, startValue, countdown: time });
      betaudio.current.play();
      console.log("current value :", startValue);
    }

    // Restore the initial time range after the trade
    if (initialTimeRange) {
      chartRef.current.timeScale().setVisibleRange(initialTimeRange);
    }
  };

  return (
    <div className="flex w-full h-[calc(100%-44px)]">
      <TradePair />
      <div ref={chartContainerRef} className="flex-grow h-full" />
      <div className="w-[180px] overflow-y-scroll p-2 space-y-2">
        <div className="flex flex-col space-y-2 p-3 rounded bg-gray-200 text-black dark:text-white dark:bg-slate-800 text-sm">
          <h1 className="text-sm font-semibold">USD/INR (OTC)</h1>
          <p className="text-xs text-gray-400">Timeframe</p>
          <div className="w-full flex items-center justify-between rounded-md text-center border border-gray-400 py-1.5 px-3">
            <span
              className="bg-gray-300 dark:bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={() => setTime(time > 1 ? time - 1 : 1)}
            >
              -
            </span>
            <span>{time} s</span>
            <span
              className="bg-gray-300 dark:bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={() => setTime(time + 1)}
            >
              +
            </span>
          </div>
          <p className="text-xs text-gray-400">Investment</p>
          <div className="w-full flex items-center justify-between rounded-md text-center border border-gray-400 py-1.5 px-3">
            <span
              className="bg-gray-300 dark:bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={() => setInvestment(investment > 10 ? investment - 10 : 10)}
            >
              -
            </span>
            <span>${investment}</span>
            <span
              className="bg-gray-300 dark:bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={() => setInvestment(investment + 10)}
            >
              +
            </span>
          </div>
          <button
            onClick={() => handleTrade("up")}
            className="w-full py-1.5 rounded bg-green-500 text-white"
          >
            UP
          </button>
          <button
            onClick={() => handleTrade("down")}
            className="w-full py-1.5 rounded bg-red-500 text-white"
          >
            DOWN
          </button>
          <audio ref={betaudio} src="betaudio.wav" />
          <audio ref={resultAudio} src="resultaudio.wav" />
        </div>
        <div className="p-3 rounded bg-gray-200 text-black dark:text-white dark:bg-slate-800 text-sm space-y-2 overflow-y-scroll">
          <div className="overflow-y-scroll">
            <h2 className="text-sm font-semibold">Trades</h2>
            {/* {trades.length > 0 ? (
              trades.map((t) => (
                <div key={t.id} className="text-[10px] font-semibold">
                  <div className="font-semibold flex justify-between items-center">
                    <span>USD/IND</span>
                    <span id="time">
                      {t.countdown > 0
                        ? `00:0${t.countdown}`
                        : `00:0${t.timeFrame}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <h1
                      className={
                        t.type === "up" ? "text-green-700" : "text-red-700"
                      }
                    >
                      {t.type === "up" ? "⬆" : "⬇️"} {t.amount} $
                    </h1>
                    <h1
                      className={t.status ? "text-green-700" : "text-red-700"}
                    >
                      {t.status === null
                        ? "00"
                        : t.status
                        ? `+ ${t.amount * 2}`
                        : `- ${t.amount}`}{" "}
                      $
                    </h1>
                  </div>
                </div>
              ))
            ) : ( */}
              <div className="flex items-center gap-2 flex-col justify-center w-full text-black dark:text-white">
                <FaBoxOpen
                  size={40}
                  className="p-2 bg-gray-400 dark:bg-slate-600 rounded-full"
                />
                <span className="text-xs font-semibold">
                  Trade List is empty.
                </span>
              </div>
             {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandlestickChart;
