import React, { useEffect, useState } from "react";
import { FaBitcoin, FaCreditCard } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";

function Deposit() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch("https://api.coincap.io/v2/assets");
        const data = await response.json();
        setCryptos(data.data);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchCryptos();
  }, []);
  return (
    <div className="bg-white dark:bg-[#212634] p-3 h-[calc(100%-44px)] rounded-t-md overflow-y-scroll">
      <div className="overflow-y-scroll">
        <div className="grid grid-cols-3 gap-5 py3  border-b border-dashed border-gray-500 dark:border-gray-300">
        <div className="col-span-2 border-r border-dashed border-gray-500 dark:border-gray-200 pr-3">
          <h1 className="flex gap-2 items-center text-sm font-semibold">
            <FaBitcoin /> Cryptocurrencies
          </h1>
          <div className="grid grid-cols-2  flex-wrap gap-5 my-3 text-sm ">
            {cryptos.slice(0, 20)?.map((crypto) => (
              <div
                key={crypto.id}
                className="bg-gray-200 dark:bg-white flex gap-3 text-black p-3 rounded-sm cursor-pointer duration-300 hover:bg-gray-300 dark:hover:bg-slate-700 dark:hover:text-white"
              >
                <img
                  src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
                  alt={crypto.name}
                  width="24"
                  height="24"
                  style={{ marginRight: "10px" }}
                />
                <span>
                  {crypto.name} ({crypto.symbol.toUpperCase()})
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm">
          <h1 className="flex  gap-2 items-center text-sm font-semibold">
          <RiBankFill /> Bank
          </h1>
          <div className="gap-3 my-3 ">
            {cryptos.slice(0, 1)?.map((crypto) => (
              <div
                key={crypto.id}
                className="bg-gray-200 dark:bg-white flex gap-3 text-black p-3 rounded-sm cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-700 dark:hover:text-white"
                >
                <img
                  src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
                  alt={crypto.name}
                  width="24"
                  height="24"
                  style={{ marginRight: "10px" }}
                />
                <span>
                 IMPS
                </span>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="grid grid-cols-3 py-3 ">
        <div className="col-span-1pr-3">
          <h1 className="flex gap-2 items-center text-sm font-semibold">
          <FaCreditCard /> E-payments
          </h1>
          <div className="grid grid-cols-1  flex-wrap gap-5 my-3 text-sm ">
            {cryptos.slice(0, 2)?.map((crypto) => (
              <div
                key={crypto.id}
                className="bg-gray-200 dark:bg-white flex gap-3 text-black p-3 rounded-sm cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-700 dark:hover:text-white"
                >
                <img
                  src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
                  alt={crypto.name}
                  width="24"
                  height="24"
                  style={{ marginRight: "10px" }}
                />
                <span>
                  {crypto.name} ({crypto.symbol.toUpperCase()})
                </span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
