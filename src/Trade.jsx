import React from 'react'

function Trade() {
  return (
    <div className="md:w-[17%] h-full p-2 space-y-2">
        <div className="flex flex-col space-y-2 p-3 rounded bg-slate-800 text-sm">
          <h1 className="text-sm font-semibold">USD/INR (OTC)</h1>
          <p className="text-xs text-gray-400">Time</p>
          <div className="w-full  flex items-center justify-between rounded-md text-center border border-gray-400 py-1.5 px-3">
            <span
              className="bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={() => {
                if (time > 2) {
                  setTime(time - 2);
                }
              }}
            >
              -
            </span>
            <span className="text-sm">00 : 0{time}</span>
            <span
              className="bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={() => {
                if (time < 8) {
                  setTime(time + 2);
                }
              }}
            >
              +
            </span>
          </div>
          <p className="text-xs text-gray-400">Investment</p>
          <div className="w-full  flex items-center justify-between rounded-md text-center border border-gray-400 py-1.5 px-3">
            <span
              className="bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={() => {
                if (investment > 20) {
                  setInvestment(investment - 20);
                }
              }}
            >
              -
            </span>
            <span className="text-sm">$ {investment}</span>
            <span
              className="bg-slate-700 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={() => setInvestment(investment + 20)}
            >
              +
            </span>
          </div>
          <button
            onClick={addMark}
            name="up"
            className="w-full rounded-md text-center bg-green-700 py-1.5"
          >
            UP
          </button>
          <button
            onClick={addMark}
            name="down"
            className="w-full rounded-md text-center bg-red-700 py-1.5"
          >
            Down
          </button>
        </div>
        <div className="flex flex-col w-full h-full  space-y-2 p-3 rounded bg-slate-800">
          <h1 className="font-semibold text-xs">Trades</h1>
          <div className="space-y-1">
            {/* {trade?.map((item, index) => {
              return (
                <div key={index} className="text-[10px] font-semibold">
                  <h1 className="font-semibold">
                    USD/IND (00:0{item.timeFrame})
                  </h1>
                  <div className="flex justify-between">
                    <h1
                      className={
                        item.type == "up" ? "text-green-700" : "text-red-700"
                      }
                    >
                      {item.type == "up" ? "⬆" : "⬇"} {item.amount} $
                    </h1>
                    <h1
                      className={
                        item.status ? "text-green-700" : "text-red-700"
                      }
                    >
                      {item.status
                        ? `+ ${item.amount * 2}`
                        : `- ${item.amount}`}{" "}
                      $
                    </h1>
                  </div>
                </div>
              );
            })} */}
            <div className="flex items-center justify-center w-full h-full">
            <FaBoxOpen />
            </div>
          </div>
          <audio ref={betaudio}>
            <source src="mixkit-software-interface-start-2574.wav" />
            Your browser does not support the audio element.
          </audio>
          <audio ref={resultAudio}>
            <source src="mixkit-correct-answer-tone-2870.wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
  )
}

export default Trade