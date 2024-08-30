import React from "react";
import { FaPen } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function Account() {
  return (
    <div className="bg-white dark:bg-[#212634] p-3 h-[calc(100%-44px)] rounded-t-md overflow-y-scroll">
      <div className="overflow-y-scroll text-sm grid grid-cols-1  xl:grid-cols-2  border-gray-300">
        {/* second section */}
        <div className="grid grid-cols-2 border-b border-dashed xl:border-none border-gray-600">
          {/* user login */}
          <div className="text-gray-800 dark:text-white p-6 w-full border-r border-dashed border-gray-600">
              <h1 className="font-semibold  text-slate-800 dark:text-white mb-3">Personal Data:</h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
              <div>
                <h2 className="text-sm font-semibold">
                  rawatadii0600@gmail.com
                </h2>
                <p className="text-xs text-gray-400">ID: 46930038</p>
                <p className="text-red-500 text-xs font-semibold flex items-center">
                  <span className="mr-1">⚠️</span> Not verified
                </p>
              </div>
            </div>

            <form>
              <div className="mb-2">
                <label className="block text-gray-400 text-sm mb-1">
                  Nickname
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-transparent rounded border border-gray-600  focus:outline-none focus:border-blue-500"
                  value="#46930038"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-400 text-sm mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-transparent  rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                  value="Aditya"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-400 text-sm mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-transparent  rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                  value="Rawat"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-400 text-sm mb-1">
                  Date of birth
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-transparent  rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                  value="22/06/2004"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-400 text-sm mb-1">
                  Aadhaar
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-transparent  rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                  value="319020655328"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-400 text-sm mb-1">
                  Email
                </label>
                <div className="flex items-center">
                  <input
                    type="email"
                    className="flex-1 px-4 py-2 bg-transparent  rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                    value="rawatadii0600@gmail.com"
                  />
                  <button className="text-blue-400 ml-2 text-sm">RESEND</button>
                </div>
                <p className="text-red-500 text-sm mt-1">Unverified</p>
              </div>
              <div className="mb-2">
                <label className="block text-gray-400 text-sm mb-1">
                  Country
                </label>
                <select className="w-full px-4 py-2 bg-transparent  rounded border border-gray-600 focus:outline-none focus:border-blue-500">
                  <option>India</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-gray-400 text-sm mb-1">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-transparent  rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                  value="Delhi"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition duration-200">
                Save
              </button>
            </form>
          </div>
          {/* aadhar verification */}
          <div className="text-gray-800 dark:text-white text-sm rounded-lg p-4  xl:border-r border-dashed border-gray-600">
            <h2 className="text-base font-semibold mb-4">
              Documents verification:
            </h2>
            <div className="dark:bg-gray-700  p-4 rounded border border-gray-600">
              <div className="flex items-center space-x-2 mb-4 border-b pb-3 border-dashed">
                <span className="text-blue-400 text-sm">ℹ️</span>
                <h3 className="font-bold">AADHAAR Verification</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-300 mb-4">
                Please upload a color photo of your physical Aadhaar (only the
                front side with your photo and document number).
              </p>
              <p className=" text-gray-400 mb-6">
                *No electronic versions will be accepted.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition duration-200 mb-4">
                Send AADHAAR
              </button>
              <p className="text-xs text-gray-500">
                Profile verification means the provision of an official document
                certifying the Client's identity. This procedure can be
                initiated by the Company’s security department at any time.
              </p>
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="grid grid-cols-2 ">
          <div className="p-4  border-r border-dashed border-gray-600">
            <div className=" text-gray-800 dark:text-white p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Security:</h2>
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-400 text-lg"><RiVerifiedBadgeFill /></span>
                  <h3 className="font-semibold">Two-step verification</h3>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  Receiving codes via Email
                </p>
                <button className="text-blue-500 text-sm flex gap-3 items-center hover:underline">
                <FaPen /> Edit
                </button>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="font-medium">To enter the platform</label>
                  <input type="checkbox" className="toggle-checkbox" checked />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-medium">To withdraw funds</label>
                  <input type="checkbox" className="toggle-checkbox" checked />
                </div>
              </div>

              <hr className="border-gray-600 border-dashed mb-6" />

              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Old password"
                  className="bg-transparent text-gray-800 dark:text-white w-full p-3 rounded-md border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="New password"
                  className="bg-transparent text-gray-800 dark:text-white w-full p-3 rounded-md border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="bg-transparent text-gray-800 dark:text-white w-full p-3 rounded-md border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200 mt-6">
                Change Password
              </button>
            </div>
          </div>
          {/* right section */}
          <div className=" p-4">
            <div className=" p-6">
              {/* Language Section */}
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">
                  Language
                </label>
                <div className="relative">
                  <select className="appearance-none w-full rounded border text-gray-800 dark:text-white border-gray-600 text- bg-transparent py-2 px-3 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>English</option>
                    {/* Add more language options here if needed */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Timezone Section */}
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">
                  Timezone
                </label>
                <div className="relative">
                  <select className="appearance-none w-full rounded border border-gray-600 text- bg-transparent py-2 px-3 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>(UTC+00:00)</option>
                    {/* Add more timezone options here if needed */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Delete Account Section */}
              <div className="border-t border-gray-600 border-dashed pt-6">
                <button className="text-red-500 hover:text-red-700 text-sm font-semibold">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
