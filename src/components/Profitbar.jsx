import React from 'react'

function Profitbar() {
  return (
    <div className='h-full flex flex-col items-center text-[10px] font-semibold'>
        <span>10%</span>
        <div className='h-[10%] my-0.5 w-1 bg-green-800 rounded-lg'/>
        <div className='h-[90%] my-0.5 w-1 bg-red-700 rounded-lg'/>
        <span>90%</span>
    </div>
  )
}

export default Profitbar