import React, { useEffect, useRef, useState } from "react";
import { Chart, LineElement, LineController, PointElement } from "chart.js";
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBoxOpen } from "react-icons/fa";
import TradePair from "./components/TradePair";

Chart.register(LineController, LineElement, PointElement);

const LineChart = () => {
  const [wallet, setWallet] = useState(10000);
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);
  const [marks, setMarks] = useState([]);
  const [trades, setTrades] = useState([]);
  const [time, setTime] = useState(4);
  const [investment, setInvestment] = useState(20);
  const resultAudio = useRef();
  const betaudio = useRef();
  const [lineData, setLineData] = useState([
    { x: new Date("2023-09-10T10:00:00"), y: 120 },
    { x: new Date("2023-09-10T10:00:02"), y: 124 },
  ]);

  useEffect(() => {
    const addNewData = () => {
      setLineData((prevData) => {
        const lastPoint = prevData[prevData.length - 1];
        const newTime = new Date(lastPoint.x.getTime() + 2000);
        const newY = Math.floor(Math.random() * 25 + 80);
        return [...prevData, { x: newTime, y: newY }];
      });
    };
    const intervalId = setInterval(addNewData, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const dynamicLineColor = {
      id: "dynamicLineColor",
      beforeDatasetDraw(chart) {
        const {
          ctx,
          chartArea: { top, bottom },
          scales: { x, y },
        } = chart;
        ctx.save();

        const dataset = chart.data.datasets[0];
        const data = dataset.data;

        for (let i = 0; i < data.length - 1; i++) {
          const currentPoint = data[i];
          const nextPoint = data[i + 1];

          ctx.beginPath();
          ctx.moveTo(
            x.getPixelForValue(currentPoint.x),
            y.getPixelForValue(currentPoint.y)
          );
          ctx.lineTo(
            x.getPixelForValue(nextPoint.x),
            y.getPixelForValue(nextPoint.y)
          );

          ctx.strokeStyle =
            nextPoint.y < currentPoint.y ? "#F44336" : "#4CAF50";
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        marks.forEach((mark) => {
          ctx.beginPath();
          ctx.arc(
            x.getPixelForValue(mark.x),
            y.getPixelForValue(mark.y),
            5,
            0,
            2 * Math.PI
          );
          ctx.fillStyle = "white";
          ctx.fill();
        });
        ctx.restore();
      },
    };

    const newChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "USD/INR",
            data: lineData,
            borderColor: "transparent",
            backgroundColor: "rgba(256, 256, 256, 0.3)",
            borderWidth: 2,
            tension: 0.1,
          },
        ],
      },
      options: {
        animation: false,
        scales: {
          x: {
            type: "time",
            time: {
              tooltipFormat: "MMM dd, yyyy HH:mm:ss",
              unit: "second",
              displayFormats: {
                second: "mm:ss",
              },
              adapters: {
                date: {
                  locale: enUS,
                },
              },
            },
            ticks: {
              color: "gray",
            },
            grid: {
              color: "rgba(250,250,250,5%)",
            },
          },
          y: {
            position: "right",
            beginAtZero: false,
            ticks: {
              color: "gray",
            },
            grid: {
              color: "rgba(256,256,256,5%)",
            },
          },
        },
      },
      plugins: [dynamicLineColor],
    });

    setChart(newChart);

    return () => {
      newChart.destroy();
    };
  }, [marks]);

  useEffect(() => {
    if (chart) {
      chart.data.datasets[0].data = lineData;
      chart.update();
    }
  }, [lineData, chart]);

  useEffect(() => {
    const timers = trades.map((trade) => {
      return setInterval(() => {
        setTrades((prevTrades) =>
          prevTrades.map((t) => {
            if (t.id === trade.id) {
              const updatedCountdown = t.countdown > 0 ? t.countdown - 1 : 0;
  
              // Check result when countdown reaches 0 and hasn't been checked yet
              if (updatedCountdown === 0 && t.status === null) {
                const newDataPoint = chart.data.datasets[0].data.slice(-1)[0];
                checkResult(t, newDataPoint);
              }
  
              return { ...t, countdown: updatedCountdown };
            }
            return t;
          })
        );
      }, 1000);
    });
  
    // Cleanup timers on component unmount
    return () => timers.forEach((timer) => clearInterval(timer));
  }, [trades, chart]);
  
  const handleMark = (mark) => {
    setMarks((prev) => [...prev, mark]);
  };

  const addMark = async (event) => {
    if (chart) {
      const lastDataPoint = chart.data.datasets[0].data.slice(-1)[0];
      const clickedPoint = {
        x: lastDataPoint.x,
        y: lastDataPoint.y,
        type: event.target.name,
      };
  
      const tradeType = clickedPoint.type === "up" ? "up" : "down";
      const newTrade = {
        id: Date.now(), // Unique ID for each trade
        status: null,
        type: tradeType,
        amount: investment,
        timeFrame: time,
        countdown: time, // Initial countdown value
        y: clickedPoint.y, // Store the y value (price) at the time of trade
      };
      setTrades((prev) => [newTrade, ...prev]);
      handleMark(clickedPoint);
    }
  };
  

  const checkResult = (trade, newPoint) => {
    // Ensure the result is only calculated once
    if (trade.status !== null) return;
  
    const isUp = trade.type === "up";
    const initialY = trade.y; // The y value at the time of trade
    const finalY = newPoint.y; // The y value at the time of result check
  
    console.log(`Trade ID: ${trade.id}`);
    console.log(`Trade Type: ${trade.type}`);
    console.log(`Initial Y: ${initialY}`);
    console.log(`Final Y: ${finalY}`);
  
    let result;
    if (isUp) {
      result = finalY > initialY ? true : finalY === initialY ? "draw" : false;
    } else {
      result = finalY < initialY ? true : finalY === initialY ? "draw" : false;
    }
  
    console.log(`Trade Result: ${result}`);
  
    // Update the trade's status
    setTrades((prevTrades) =>
      prevTrades.map((t) => (t.id === trade.id ? { ...t, status: result } : t))
    );
  };
  

  return (
    <div className="flex w-full h-[calc(100%-44px)] relative">
      <TradePair />
      <div className="absolute left-10 top-20 text-xs">
        <ToastContainer
          style={{ width: "250px", height: "150px" }}
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <div className="flex-grow">
        <canvas ref={chartRef} id="lineChart" />
      </div>
      <div className="w-[180px] overflow-y-scroll p-2 space-y-2">
        <div className="flex flex-col space-y-2 p-3 rounded bg-gray-200 text-black dark:text-white dark:bg-slate-800 text-sm">
          <h1 className="text-sm font-semibold">USD/INR (OTC)</h1>
          <p className="text-xs text-gray-400">Time</p>
          <div className="w-full flex items-center justify-between rounded-md text-center border border-gray-400 py-1.5 px-3">
            <span
              className="bg-gray-300 dark:bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={() => setTime(time > 1 ? time - 1 : 1)}
            >
              -
            </span>
            <span className="text-sm">{time} sec</span>
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
              onClick={() => {
                if (investment > 20) {
                  setInvestment(investment - 10);
                }
              }}
            >
              -
            </span>
            <span className="text-sm">$ {investment}</span>
            <span
              className="bg-gray-300 dark:bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={() => setInvestment(investment + 10)}
            >
              +
            </span>
          </div>
          <div className="w-full flex items-center justify-between rounded-md text-center py-1.5">
            <button
              name="up"
              onClick={addMark}
              className="bg-green-500 dark:bg-green-700 text-white py-2 px-3 rounded w-full"
            >
              UP
            </button>
          </div>
          <div className="w-full flex items-center justify-between rounded-md text-center py-1.5 ">
            <button
              name="down"
              onClick={addMark}
              className="bg-red-500 dark:bg-red-700 text-white py-2 px-3 rounded w-full"
            >
              DOWN
            </button>
          </div>
        </div>
        {/* Display Trade Details */}
        <div className="p-3 rounded bg-gray-200 text-black dark:text-white dark:bg-slate-800 text-sm space-y-2 overflow-y-scroll">
          <div className="overflow-y-scroll">
            <h2 className="text-sm font-semibold">Trades</h2>
            {trades.length > 0 ? (
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
            ) : (
              <div className="flex items-center gap-2 flex-col justify-center w-full text-black dark:text-white">
                <FaBoxOpen
                  size={40}
                  className="p-2 bg-gray-400 dark:bg-slate-600 rounded-full"
                />
                <span className="text-xs font-semibold">
                  Trade List is empty.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <audio ref={betaudio} src="betaudio.wav" />
      <audio ref={resultAudio} src="resultaudio.wav" />
    </div>
  );
};

export default LineChart;
