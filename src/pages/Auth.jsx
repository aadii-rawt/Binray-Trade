import React, { useState } from 'react'; 
import { FaFacebookF } from "react-icons/fa"; 
import { FaGoogle } from "react-icons/fa"; 
 
const Auth = () => { 
 
    const [isLogin, setIsLogin] = useState(''); 
 
    return ( 
        <div className="flex flex-col gap-6 items-center pt-6 min-h-screen bg-gray-900"> 
            <h2 className="text-3xl font-extrabold text-center text-white"> 
                Sign In To Your Account 
            </h2> 
            <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg"> 
 
                <div className="flex justify-center mt-4 space-x-3 p-2 py-[5px] bg-gray-600 mx-auto w-fit rounded-md "> 
                    <button 
                        onClick={() => { setIsLogin(true) }} 
                        className={`px-4 py-2 font-bold text-white ${isLogin ? 'bg-gray-700' : 'bg-transparent'} rounded-md`}> 
                        Login 
                    </button> 
                    <button 
                        onClick={() => { setIsLogin(false) }} 
                        className={`px-4 py-2 font-bold text-white ${isLogin ? 'bg-transparent' : 'bg-gray-700'} rounded-md`}> 
                        Registeration 
                    </button> 
                </div> 
 
                { 
                    isLogin ? 
                        <form 
                            className="mt-8 space-y-6"> 
                            <div className="relative"> 
                                <label 
                                    htmlFor="email" 
                                    className="bg-gray-800 ml-2 absolute top-0 left-0 px-2 text-sm text-gray-400 transition-transform transform -translate-y-1/2 pointer-events-none" 
                                > 
                                    Email 
                                </label> 
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    autoComplete="email" 
                                    required 
                                    className="block w-full px-3 py-2 mt-3 text-gray-300 placeholder-gray-600 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 peer" 
                                    placeholder="Enter your email" 
                                /> 
                            </div> 
                            <div className="relative"> 
                                <label 
                                    htmlFor="password" 
                                    className="bg-gray-800 ml-2 absolute top-0 left-0 px-2 text-sm text-gray-400 transition-transform transform -translate-y-1/2 pointer-events-none" 
                                > 
                                    Password 
                                </label> 
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autoComplete="current-password" 
                                    required 
                                    className="block w-full px-3 py-2 mt-3 text-gray-300 placeholder-gray-600 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 peer" 
                                    placeholder="Enter your password" 
                                /> 
                            </div> 
                            <div className="flex items-center justify-between"> 
                                <div className="flex items-center"> 
                                    <input 
                                        id="remember_me" 
                                        name="remember_me" 
                                        type="checkbox" 
                                        className="w-4 h-4
text-blue-60
0 bg-gray-800 border-gray-600 rounded focus:ring-blue-500" 
                                    /> 
                                    <label htmlFor="remember_me" className="block ml-4 text-sm text-gray-300"> 
                                        Remember me 
                                    </label> 
                                </div> 
 
                                <div className="text-sm"> 
                                    <a href="#" className="font-medium text-blue-500 hover:text-blue-400"> 
                                        Forgot your password? 
                                    </a> 
                                </div> 
                            </div> 
                            <div> 
                                <button 
                                    type="submit" 
                                    className="relative flex justify-center w-full px-4 py-2 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
                                > 
                                    Sign In 
                                </button> 
                            </div> 
                        </form> 
 
                        : 
                        <form className="mt-8 space-y-6"> 
                            <div className="relative"> 
                                <label 
                                    className="bg-gray-800 ml-2 absolute top-0 left-0 px-2 text-sm text-gray-400 transition-transform transform -translate-y-1/2 pointer-events-none" 
                                > 
                                    Country 
                                </label> 
                                <input 
                                    name="country" 
                                    type="text" 
                                    required 
                                    className="block w-full px-3 py-2 mt-3 text-gray-300 placeholder-gray-600 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 peer" 
                                    placeholder="Enter your Country" 
                                /> 
                            </div> 
 
                            <div className="relative"> 
                                <label 
                                    className="bg-gray-800 ml-2 absolute top-0 left-0 px-2 text-sm text-gray-400 transition-transform transform -translate-y-1/2 pointer-events-none" 
                                > 
                                    Currency 
                                </label> 
                                <input 
                                    type="text" 
                                    required 
                                    className="block w-full px-3 py-2 mt-3 text-gray-300 placeholder-gray-600 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 peer" 
                                    placeholder="Enter your Currency" 
                                /> 
                            </div> 
 
                            <div className="relative"> 
                                <label 
                                    className="bg-gray-800 ml-2 absolute top-0 left-0 px-2 text-sm text-gray-400 transition-transform transform -translate-y-1/2 pointer-events-none" 
                                > 
                                    Email 
                                </label> 
                                <input 
                                    type="email" 
                                    required 
                                    className="block w-full px-3 py-2 mt-3 text-gray-300 placeholder-gray-600 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 peer" 
                                    placeholder="Enter your Email"
/> 
                            </div> 
 
                            <div className="relative"> 
                                <label 
                                    className="bg-gray-800 ml-2 absolute top-0 left-0 px-2 text-sm text-gray-400 transition-transform transform -translate-y-1/2 pointer-events-none" 
                                > 
                                    Password 
                                </label> 
                                <input 
                                    type="password" 
                                    required 
                                    className="block w-full px-3 py-2 mt-3 text-gray-300 placeholder-gray-600 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 peer" 
                                    placeholder="Enter your password" 
                                /> 
                            </div> 
                           
 
                            <div className="flex gap-4 items-center"> 
                                <input 
                                    id="age_conf" 
                                    type="checkbox" 
                                    // required 
                                    className="w-6 h-6" 
                                /> 
 
                                <label 
                                    htmlFor="age_conf" 
                                    className="text-gray-400 text-sm" 
                                > 
                                    <span> 
                                        I confirm that I am 18 years old or older and accept 
                                    </span> 
                                    <span> 
                                        <a 
                                        href="#" 
                                        className='text-blue-500 ml-1 ' 
                                        >Service Agreement</a> 
                                    </span> 
                                </label> 
                            </div> 
 
                            <div> 
                                <button 
                                    type="submit" 
                                    className="relative flex justify-center w-full px-4 py-2 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
                                > 
                                    Register 
                                </button> 
                            </div> 
 
                        </form> 
                } 
                <div className="mt-6"> 
                    <p className="text-center text-gray-400 mb-8">Sign in via</p> 
                    <div className="flex justify-center mt-4 space-x-4"> 
                        <button className="px-7 text-xl py-4 text-white bg-blue-600 rounded-xl hover:bg-blue-500"> 
                            <FaFacebookF /> 
                        </button> 
                        <button className="px-7 text-xl py-4 text-white bg-red-600 rounded-xl hover:bg-red-500"> 
                            <FaGoogle /> 
                        </button> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
} 
 
export default Auth;