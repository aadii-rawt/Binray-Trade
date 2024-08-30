import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Setting from '../components/Setting';
import SupportModal from '../components/SupportModal';
import Header from '../components/Header';
import LineChart from '../LineChart';
import { Outlet } from 'react-router-dom';
import MoreModal from '../components/MoreModal';

function Layout() {
    const [wallet, setWallet] = useState(10000);
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const [isSupportOpen, setIsSupportOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
  
  return (
    <div>
         <div className="dark:bg-slate-900 bg-white text-black dark:text-white w-full min-h-screen max-h-screen pb-2 flex relative">
      <div className="relative">
        <Sidebar setIsSettingOpen={setIsSettingOpen}  setIsSupportOpen={setIsSupportOpen} setIsMoreOpen={setIsMoreOpen} />
        {isSettingOpen && <Setting setIsSettingOpen={setIsSettingOpen} />}
        {isSupportOpen &&  <SupportModal setIsSupportOpen={setIsSupportOpen} />}  
        {isMoreOpen &&  <MoreModal setIsMoreOpen={setIsMoreOpen} />}  
      </div>
      <div className="w-full">
        <Header wallet={wallet} />
        <Outlet />
      </div>
    </div>
    </div>
  )
}

export default Layout