import React from "react";

function AccountCart() {
  return (
    <div className="absolute top-10 right-0 w-60 text-black dark:text-white bg-gray-200 dark:bg-slate-600 z-20 rounded-sm my-2 p-1 flex gap-2">
      <div className="dark:bg-slate-800 bg-gray-400  p-2 ">
        <h1>rawatadii060@gmail.com</h1>
        <span className="text-gray-500 text-xs">ID :8098233</span>
        <h1 className="my-2">Currency: USD </h1>
        <form action="" className="text-xs">
          <hr className="dark:bg-white bg-black"/>
        <div className="py-3 flex items-center gap-3">
          <input type="radio" id="id" name="account-type" />
          <label htmlFor="id">Live Account</label>
        </div>  
        <hr />    
        <div className="py-3 flex items-center gap-3">
          <input type="radio" id="demo" name="account-type" checked/>
          <label htmlFor="demo">Demo Account</label>
        </div>      
        </form>
      </div>
      <div>
        <ul className="space-y-2 text-[11px]">
          <li>Deposit</li>
          <li>Withdrawal</li>
          <li>Transactions</li>
          <li>Trades</li>
          <li>Account</li>
          <hr />
          <li className="text-red-700">Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default AccountCart;
