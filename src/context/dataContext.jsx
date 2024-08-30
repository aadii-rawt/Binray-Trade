import { createContext, useContext, useState } from "react";

const dataContext = createContext();

export function DataProvider({ children }) {
  const [chartTheme, setChartTheme] = useState({
    background: "#0F172A",
    text: "#FFFFFF",
  });

  const [candletimer, setCandleTimer] = useState(15);

  const [wallet, setWallet] = useState(10000);
  const [openChart, setOpenChart] = useState([
    {
      pair: "USD/BRL (OTC)",
      change: "-0.64%",
      payout1: 93,
      payout2: 88,
      id: crypto.randomUUID(),
    },
  ]);

  const USD_BRL_Data = [
    { time: 1693518000, open: 110, high: 115.76, low: 108.85, close: 112.95 },
    {
      time: 1693521600,
      open: 112.95,
      high: 113.3,
      low: 99.46,
      close: 103.58,
    },
    {
      time: 1693525200,
      open: 103.58,
      high: 112.01,
      low: 102.37,
      close: 111.84,
    },
    {
      time: 1693528800,
      open: 111.84,
      high: 116.65,
      low: 109.8,
      close: 113.34,
    },
    {
      time: 1693532400,
      open: 113.34,
      high: 122.72,
      low: 96.75,
      close: 106.28,
    },
    { time: 1693536000, open: 106.28, high: 109.95, low: 92.0, close: 96.6 },
    { time: 1693539600, open: 96.6, high: 103.66, low: 88.77, close: 103.44 },
    {
      time: 1693543200,
      open: 103.44,
      high: 110.26,
      low: 97.71,
      close: 108.08,
    },
    {
      time: 1693546800,
      open: 108.08,
      high: 117.41,
      low: 101.01,
      close: 101.74,
    },
    {
      time: 1693550400,
      open: 101.74,
      high: 107.36,
      low: 94.15,
      close: 100.96,
    },
    {
      time: 1693554000,
      open: 100.96,
      high: 109.9,
      low: 93.23,
      close: 108.44,
    },
    {
      time: 1693557600,
      open: 108.44,
      high: 119.01,
      low: 102.71,
      close: 115.1,
    },
    {
      time: 1693561200,
      open: 115.1,
      high: 119.35,
      low: 98.49,
      close: 106.29,
    },
    {
      time: 1693564800,
      open: 106.29,
      high: 116.06,
      low: 95.25,
      close: 99.74,
    },
    {
      time: 1693568400,
      open: 99.74,
      high: 102.39,
      low: 91.92,
      close: 100.23,
    },
    {
      time: 1693572000,
      open: 100.23,
      high: 102.57,
      low: 91.37,
      close: 96.41,
    },
    { time: 1693575600, open: 96.41, high: 98.66, low: 78.47, close: 86.98 },
    { time: 1693579200, open: 86.98, high: 88.71, low: 82.98, close: 87.44 },
    { time: 1693582800, open: 87.44, high: 100.47, low: 86.77, close: 92.05 },
    { time: 1693586400, open: 92.05, high: 95.11, low: 80.45, close: 89.78 },
  ];

  const NZD_CAD_Data = [
    { time: 1693590000, open: 100.2, high: 102.5, low: 99.1, close: 100.8 },
    { time: 1693593600, open: 100.8, high: 101.9, low: 98.7, close: 99.4 },
    { time: 1693597200, open: 99.4, high: 100.6, low: 97.8, close: 98.9 },
    { time: 1693600800, open: 98.9, high: 99.7, low: 96.5, close: 97.2 },
    { time: 1693604400, open: 97.2, high: 98.8, low: 95.6, close: 97.7 },
    { time: 1693608000, open: 97.7, high: 98.9, low: 96.3, close: 97.1 },
    { time: 1693611600, open: 97.1, high: 98.4, low: 95.7, close: 96.9 },
    { time: 1693615200, open: 96.9, high: 99.1, low: 96.1, close: 98.5 },
    { time: 1693618800, open: 98.5, high: 99.8, low: 97.4, close: 98.0 },
    { time: 1693622400, open: 98.0, high: 99.3, low: 96.9, close: 97.5 },
    { time: 1693626000, open: 97.5, high: 98.7, low: 95.8, close: 96.3 },
    { time: 1693629600, open: 96.3, high: 97.4, low: 95.2, close: 96.9 },
    { time: 1693633200, open: 96.9, high: 98.1, low: 95.6, close: 97.7 },
    { time: 1693636800, open: 97.7, high: 98.9, low: 96.5, close: 98.3 },
    { time: 1693640400, open: 98.3, high: 99.5, low: 97.4, close: 98.1 },
    { time: 1693644000, open: 98.1, high: 99.2, low: 96.8, close: 97.3 },
    { time: 1693647600, open: 97.3, high: 98.4, low: 96.0, close: 96.7 },
    { time: 1693651200, open: 96.7, high: 98.1, low: 95.9, close: 97.5 },
    { time: 1693654800, open: 97.5, high: 99.0, low: 96.8, close: 98.4 },
    { time: 1693658400, open: 98.4, high: 99.7, low: 97.5, close: 98.2 },
    { time: 1693662000, open: 98.2, high: 99.4, low: 97.3, close: 98.8 },
    { time: 1693665600, open: 98.8, high: 99.9, low: 97.9, close: 98.6 },
    { time: 1693669200, open: 98.6, high: 99.8, low: 97.5, close: 98.1 },
    { time: 1693672800, open: 98.1, high: 99.2, low: 96.7, close: 97.0 },
    { time: 1693676400, open: 97.0, high: 98.4, low: 96.0, close: 97.8 },
    { time: 1693680000, open: 97.8, high: 99.0, low: 96.9, close: 98.5 },
    { time: 1693683600, open: 98.5, high: 99.6, low: 97.3, close: 98.9 },
    { time: 1693687200, open: 98.9, high: 100.2, low: 97.5, close: 99.4 },
    { time: 1693690800, open: 99.4, high: 100.7, low: 98.1, close: 99.0 },
    { time: 1693694400, open: 99.0, high: 100.3, low: 98.0, close: 98.7 },
  ];

  const [mediaStream,setMediaStream] = useState(true)

  const [chartData, setChartData] = useState(USD_BRL_Data);

  const [currentOpenedChart, setCurrentOpenedChart] = useState(openChart[0]);
  return (
    <dataContext.Provider
      value={{
        chartTheme,
        setChartTheme,
        wallet,
        setWallet,
        candletimer,
        setCandleTimer,
        openChart,
        setOpenChart,
        chartData,
        setChartData,
        NZD_CAD_Data,
        currentOpenedChart,
        setCurrentOpenedChart,
        mediaStream,setMediaStream
      }}
    >
      {children}
    </dataContext.Provider>
  );
}

export function useData() {
  return useContext(dataContext);
}
