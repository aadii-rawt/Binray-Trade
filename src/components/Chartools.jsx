import React, { useState } from "react";
import { useData } from "../context/dataContext";

function Chartools() {
  const [isTimeFrameOpen, setIsTimeFrameOpen] = useState(false);
  const candleTimeList = [
    {
      text: "5s",
      value: 5
    },
    {
      text: "10s",
      value: 10
    },
    {
      text: "15s",
      value: 15
    },
    {
      text: "30s",
      value: 30
    },
    {
      text: "1m",
      value: 60
    },
    {
      text: "2m",
      value: 60 * 2
    },
    {
      text: "5m",
      value: 60 * 5
    },
    {
      text: "10m",
      value: 60 * 10
    },
    {
      text: "1d",
      value: 60 * 60
    },
  ]
  const {setCandleTimer} = useData()
  const [timer,setTimer] = useState('15s')

  function handleCandleTime(t){
    setTimer(t.text)
    setCandleTimer(t.value)
  }

  return (
    <div className="absolute left-0 bottom-10 z-10 space-y-1">
      <div className="p-1.5 bg-slate-400/20 rounded-sm cursor-pointer hover:bg-white hover:text-black duration-300" >
        ✏️
      </div>
      <div
        className="p-1.5 bg-slate-400/20  relative rounded-sm cursor-pointer  hover:bg-white hover:text-black duration-300"
        onClick={() => setIsTimeFrameOpen(!isTimeFrameOpen)}
      >
        <span className="font-semibold text-sm">{timer}</span>
        {isTimeFrameOpen && (
          <div className="absolute bg-slate-900/50 p-1.5 rounded left-10 -top-10 grid grid-cols-3 gap-1 w-36">
            {candleTimeList?.map((t,index) => {
              return <div key={index} className="p-1.5 bg-slate-800 font-semibold text-white hover:bg-white hover:text-black rounded-sm text-center" onClick={() => handleCandleTime(t)}>{t.text}</div>;
            })}
          </div>
        )}
      </div>
      <div className="p-1.5 bg-slate-400/20 rounded-sm cursor-pointer hover:bg-white hover:text-black duration-300" >
        📈
      </div>
      <div className="p-1.5 bg-slate-400/20 rounded-sm cursor-pointer hover:bg-white hover:text-black duration-300">
        📊
      </div>
    </div>
  );
}

export default Chartools;
