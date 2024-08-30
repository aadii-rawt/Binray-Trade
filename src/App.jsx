// src/App.js
import React, { useState } from "react";
import LineChart from "./LineChart";
import FakeChart from "./FakeChart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Account from "./pages/Account";
import Deposit from "./pages/Deposit";
import Tournaments from "./pages/Tournaments";
import Market from "./pages/Market";
import Candelstickchart from "./components/CandlestickChart";
import Auth from "./pages/Auth";

function App() {
  const [wallet, setWallet] = useState(10000);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Candelstickchart />
        },
        {
          path: "/account",
          element: <Account />
        },
        {
          path: "/deposit",
          element: <Deposit />
        },
        {
          path: "/tournament",
          element: <Tournaments />
        },
        {
          path: "/market",
          element: <Market />
        },
        {
          path: "/new",
          element: <Candelstickchart />
        },
      ]
    },
    {
      path: "/auth",
      element: <Auth />
    }
  ])
  return (
    // <div className="dark:bg-slate-900 bg-white text-black dark:text-white w-full min-h-screen max-h-screen pb-2 flex relative overflow-hidden">
    //   <div className="relative">
    //     <Sidebar setIsSettingOpen={setIsSettingOpen}  setIsSupportOpen={setIsSupportOpen} />
    //     {isSettingOpen && <Setting setIsSettingOpen={setIsSettingOpen} />}
    //     {isSupportOpen &&  <SupportModal setIsSupportOpen={setIsSupportOpen} />}  
    //   </div>
    //   <div className="w-full">
    //     <Header wallet={wallet} />
    //     <LineChart wallet={wallet} setWallet={setWallet} />
    //   </div>
    // </div>

    <RouterProvider router={router} />
  );
}

export default App;
