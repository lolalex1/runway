import React from 'react'

import { HiOutlineTrendingUp, HiOutlineTrendingDown } from "react-icons/hi";

interface CalendarMonthProps {
  month: string;
  description: string;
  trendPercentage: number;
  savingsAmount: number;
}

export default function CalendarMonth(props: CalendarMonthProps) {
  return (
    <div className="w-full h-96 border-2 border-neutral-700/20 rounded-lg border-dashed flex flex-col p-2">
      <div className="w-full h-fit p-4 px-8 rounded-lg bg-neutral-700/20 flex flex-row justify-between items-center">
        <div className="flex flex-col gap-0.5">
          <span className="text-white font-semibold text-lg">{props.month}</span>
          <span className="text-gray-400 text-xs px-1">{props.description}</span>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <div className="flex flex-row gap-1 items-center">
            {props.trendPercentage < 0 ? <HiOutlineTrendingDown className="text-red-400 text-2xl" /> : <HiOutlineTrendingUp className="text-green-400 text-2xl" />}
            <span className={`text-2xl font-semibold ${props.trendPercentage < 0 ? 'text-red-400' : 'text-green-400'}`}>{props.trendPercentage}%</span>
          </div>
          <div className="flex flex-col text-xs">
            <span className="text-gray-400">You saved <span className='text-white font-medium mr-1'>${props.savingsAmount}</span>this month.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
