import React, { useEffect, useRef, useState } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import { useData } from "../context/dataContext";
import TradePair from "./TradePair";
import Chartools from "./Chartools";
import OpenedCurrency from "./OpenedCurrency";
import HandleZoom from "./HandleZoom";

const CandlestickChart = () => {
  const chartContainerRef = useRef(null);
  const candlestickSeriesRef = useRef(null);
  const chartRef = useRef(null);
  const betaudio = useRef();
  const resultAudio = useRef();
  const { chartTheme, chartData,mediaStream } = useData();
  const { candletimer, setCandleTimer } = useData();
  const [candlePrice, setCandlePrice] = useState(null);
  const [time, setTime] = useState(4); // Timeframe in seconds
  const [investment, setInvestment] = useState(20);
  const lastBarRef = useRef(null);
  const currentTimestampRef = useRef(Math.floor(Date.now() / 1000));
  const [trades, setTrades] = useState([]); // State to track multiple trades

  const tradeIntervals = useRef({}); // Ref to store interval IDs for each trade

  // Function to format timestamps for the initial data
  const formatTimestamps = (data, interval) => {
    let timestamp = Math.floor(Date.now() / 1000) - data.length * interval;
    return data.map((entry) => {
      timestamp += interval;
      return { ...entry, time: timestamp };
    });
  };

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
      crosshair: {
        mode: CrosshairMode.Normal, // Update here
      },
    };
    const chart = createChart(chartContainerRef.current, chartOptions);
    chartRef.current = chart; // Store the chart instance

    candlestickSeriesRef.current = chart.addCandlestickSeries({
      upColor: "#10A055",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#10A055",
      wickDownColor: "#ef5350",
    });
    chart.timeScale().applyOptions({
      rightOffset: 5,
      fixLeftEdge: true,
      timeVisible: true,
      fixRightEdge: true,
      barSpacing: 10,
    });

    chart.subscribeCrosshairMove((param) => {
      if (param.time || param) {
        const data = param.seriesData.get(candlestickSeriesRef.current);
        setCandlePrice(data);
      }
    });

    candlestickSeriesRef.current.setData(chartData);
    lastBarRef.current = chartData[chartData.length - 1];

    const updateCurrentBar = () => {
      const newPrice = lastBarRef.current.close + (Math.random() - 0.5) * 2;
      lastBarRef.current = {
        ...lastBarRef.current,
        high: Math.max(lastBarRef.current.high, newPrice),
        low: Math.min(lastBarRef.current.low, newPrice),
        close: newPrice,
      };

      candlestickSeriesRef.current.update(lastBarRef.current);
    };

    const createNewBar = () => {
      const newTimestamp = currentTimestampRef.current + candletimer;
      const newBar = {
        time: newTimestamp,
        open: lastBarRef.current.close,
        high: lastBarRef.current.close,
        low: lastBarRef.current.close,
        close: lastBarRef.current.close,
      };

      // Ensure that the last bar is fully committed before updating the state
      lastBarRef.current = newBar;
      candlestickSeriesRef.current.update(newBar);
      currentTimestampRef.current = newTimestamp;
    };

    const updateInterval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      if (now >= currentTimestampRef.current + candletimer) {
        createNewBar();
      } else {
        updateCurrentBar();
      }
    }, 1000);

    candlestickSeriesRef.current.setData(chartData);
    lastBarRef.current = chartData[chartData.length - 1];

    return () => {
      clearInterval(updateInterval);
      // Clean up all trade intervals
      Object.values(tradeIntervals.current).forEach(clearInterval);
      chart.remove();
    };
  }, [chartTheme, candletimer, chartData]);

  const handleTrade = (type) => {
    const tradeTime = lastBarRef.current.time;
    const startValue = lastBarRef.current.close;

    const lineSeries = chartRef.current.addLineSeries({
      color: type == "up" ? "green" : "red", // Trendline color
      lineWidth: 2, // Line width
      lineStyle: 0, // Solid line style (0 for solid, 1 for dashed)
      priceLineVisible: false, // Hide price line if that's causing the dashed line
      crossHairMarkerVisible: false, // Hide the marker if it's not needed
    });

    // Place the line on the correct candle
    const trendlineData = [{ time: tradeTime, value: startValue }];
    lineSeries.setData(trendlineData);

    const tradeId = tradeTime;

    const newTrade = {
      id: tradeId,
      type,
      startValue,
      countdown: time,
      amount: investment,
      result: null,
      lineSeries,
    };

    setTrades((prevTrades) => [...prevTrades, newTrade]);

    if(mediaStream) betaudio.current.play();
    console.log("current value :", startValue);

    const tradeInterval = setInterval(() => {
      setTrades((prevTrades) =>
        prevTrades.map((trade) => {
          if (trade.id === tradeId) {
            if (trade.countdown > 1) {
              return { ...trade, countdown: trade.countdown - 1 };
            } else if (trade.countdown === 1) {
              const newValue = lastBarRef?.current?.close;
              const isWin =
                (trade.type === "up" && newValue > trade.startValue) ||
                (trade.type === "down" && newValue < trade.startValue);
                if(mediaStream) resultAudio.current.play();
              removeTradeSeries(trade);
              clearInterval(tradeIntervals.current[tradeId]); // Stop the interval for this trade
              delete tradeIntervals.current[tradeId]; // Clean up interval ID

              return {
                ...trade,
                result: isWin ? trade.amount * 2 : -trade.amount,
                countdown: 0,
              };
            }
          }
          return trade;
        })
      );
    }, 1000);

    tradeIntervals.current[tradeId] = tradeInterval; // Store the interval ID for this trade
  };

  function removeTradeSeries(trade) {
    if (chartRef.current && trade.lineSeries) {
      // Remove the series safely
      chartRef.current.removeSeries(trade.lineSeries);
      trade.lineSeries = null; // Clear the reference after removal
    } else {
      console.error("Cannot remove series: chart or series not defined.");
    }
  }

  const formatCountdown = (countdown) => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  function handleZoomIn() {
    const timeScale = chartRef.current.timeScale();
    const visibleRange = timeScale.getVisibleRange();
    const newRange = {
      from: visibleRange.from + (visibleRange.to - visibleRange.from) * 0.2,
      to: visibleRange.to - (visibleRange.to - visibleRange.from) * 0.1,
    };
    timeScale.setVisibleRange(newRange);
  }

  function handleZoomOut() {
    const timeScale = chartRef.current.timeScale();
    const visibleRange = timeScale.getVisibleRange();
    const newRange = {
      from: visibleRange.from - (visibleRange.to - visibleRange.from) * 0.1,
      to: visibleRange.to + (visibleRange.to - visibleRange.from) * 0.1,
    };
    timeScale.setVisibleRange(newRange);
  }


  const reverseTrade = [...trades].reverse();
  return (
    <div className="flex w-full h-[calc(100%-44px)]">
      <TradePair />
      <div className="flex-grow h-full relative">
        <div
          ref={chartContainerRef}
          className="flex-grow h-full relative text-gray-300"
        >
          {candlePrice && (
            <div className="absolute left-14 bottom-10 z-10 text-xs">
              <p>Open: {parseFloat(candlePrice?.open.toFixed(2))}</p>
              <p>High: {parseFloat(candlePrice?.high.toFixed(2))}</p>
              <p>Low: {parseFloat(candlePrice?.low.toFixed(2))}</p>
              <p>Close:{parseFloat(candlePrice?.close.toFixed(2))}</p>
            </div>
          )}
        </div>
        <OpenedCurrency />
        <Chartools />
        <HandleZoom handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} />
      </div>
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
              onClick={() =>
                setInvestment(investment > 10 ? investment - 10 : 10)
              }
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
            {reverseTrade.length > 0 ? (
              reverseTrade?.map((trade) => (
                <div
                  key={trade.id}
                  className="text-[10px] w-full font-semibold"
                >
                  <div className="font-semibold flex justify-between items-center">
                    <span>USD/INR</span>
                    <span
                      className={
                        trade.result
                          ? trade.result > 0
                            ? "text-green-500"
                            : "text-red-500"
                          : ""
                      }
                    >
                      {trade.result ? `$${trade.result.toFixed(2)}` : ""}
                    </span>
                  </div>
                  <div className="text-gray-400 text-xs flex justify-between items-center">
                    <span>{trade.type.toUpperCase()}</span>
                    <span>{formatCountdown(trade.countdown)}</span>
                  </div>
                </div>
              ))
            ) : (
              <div>No Trades</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandlestickChart;
