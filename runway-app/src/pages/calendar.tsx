import React from 'react'

import CalendarMonth from '@/components/calendarmonth'

export default function CalendarPage() {
    return (
        <>
            <div className="w-full h-full flex flex-col gap-2">
                <CalendarMonth month="January" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." trendPercentage={28} savingsAmount={400} />
                <CalendarMonth month="February" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." trendPercentage={-32} savingsAmount={400} />
                <CalendarMonth month="March" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." trendPercentage={12} savingsAmount={400} />
            </div>
        </>
    )
}
