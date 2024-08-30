import React from 'react';
import { BsClock, BsWatch } from 'react-icons/bs';
import { FaBox, FaBoxOpen, FaGift, FaPercentage } from 'react-icons/fa';
import { GiCash, GiSwapBag } from 'react-icons/gi';
import { ImCancelCircle } from 'react-icons/im';
import { IoShieldCheckmark } from 'react-icons/io5';

const Market = () => {
  const promoCodes = [
    {
      icon:  <IoShieldCheckmark size={24} />,
      background: "0E8BFF",
      title: 'Risk Free',
      promoCount: '0 PROMO CODES AVAILABLE',
    },
    {
      icon: <GiCash />,
      background: "B366FF",
      title: 'Cashback',
      promoCount: '0 PROMO CODES AVAILABLE',
    },
    {
      icon: <GiSwapBag />,
      background: "E05507",
      title: 'Deposit Bonus',
      promoCount: '0 PROMO CODES AVAILABLE',
    },
    {
      icon: <FaPercentage />,
      background: "D04AC3",
      title: 'Percentage of turnover',
      promoCount: '0 PROMO CODES AVAILABLE',
    },
    {
      icon: <FaGift />,
      background: "6675FF",
      title: 'Balance Bonus',
      promoCount: '0 PROMO CODES AVAILABLE',
    },
    {
      icon: <FaBox />,
      background: "00C8BC",
      title: 'Cancel X points',
      promoCount: '0 PROMO CODES AVAILABLE',
    },
  ];

  return (
    <div className="bg-white p-2 dark:bg-[#212634] h-[calc(100%-44px)] rounded-md overflow-y-scroll">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-scroll">
        {promoCodes.map((promo, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg">
            <div className='  p-4'>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <span className={`text-xl rounded-md p-2`} style={{background: "#"+promo.background}}>
                  {promo?.icon}
                </span>
                <h2 className="text-xl font-semibold">{promo.title}</h2>
              </div>
              {/* <span className="text-sm text-gray-400">{promo.promoCount}</span> */}
            </div>
            <div className="border border-gray-400/50 text-xs  space-y-3  font-semibold p-5 rounded-lg mb-4 flex flex-col items-center justify-center">
              <div className='flex items-center gap-2 flex-coljustify-center '>
              <FaBoxOpen
                  size={40}
                  className="p-2 bg-gray-500/45 dark:bg-slate-600/50 rounded-full text-gray-500"
                />
              </div>
              <p className="text-gray-400 text-center">
                You don't have a promo code history yet. You can add a promo code using the button below.
              </p>
            </div>
            </div>
            <div className="flex text-xs justify-between bg-black/70 rounded-b-lg p-4">
              <span className='flex gap-3 items-center font-semibold'>
                <span><BsClock /></span>
                <p>Show all history</p>
              </span>
              <button className="bg-green-500 text-white p-2 rounded">Enter promo code</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
