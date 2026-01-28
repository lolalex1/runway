import { useState } from 'react'
import './App.css'

// Pages
import CalendarPage from './pages/calendar'

// Icons
import { HiCalendarDateRange } from "react-icons/hi2";
import { BsPeopleFill } from "react-icons/bs";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { RiSettingsFill } from "react-icons/ri";

function App() {
	const [page, setPage] = useState('calendar')

	return (
		<>
			<div className="w-screen h-screen pt-12 flex flex-col items-center">
				<div className="w-3/4 h-fit p-4 rounded-lg bg-surface-elevated flex flex-row justify-between items-center">
					<div className="flex flex-col gap-2">
						<span className="text-white font-bold text-2xl">Welcome back, Alex!</span>
						<span className="text-white/70 px-2">Let's check out what Runway forecasts today!</span>
					</div>
					<span className="bg-surface p-2 rounded-sm text-center text-4xl font-black">$5,000</span>
				</div>
				<div className="w-3/4 h-full flex flex-row pt-5">
					<div className="w-1/5 h-full flex flex-col gap-1 border-r-2 border-surface">
						<div className='text-lg gap-3 flex flex-col text-gray-400 cursor-pointer h-fit pr-4'>
							<div className={`flex flex-row gap-3 items-center transition-all duration-200 pl-4 ${page === 'calendar' && 'bg-white/70 text-gray-900 font-semibold py-2 rounded-full scale-105'} ${page !== 'calendar' && 'hover:bg-neutral-800/60 hover:scale-105 hover:text-white rounded-full py-2'}`} onClick={() => setPage('calendar')}>
								<HiCalendarDateRange className="text-lg" />
								<span className="text-sm">Calendar</span>
							</div>
							<div className={`flex flex-row gap-3 items-center transition-all duration-200 pl-4 ${page === 'people' && 'bg-white/70 text-gray-900 font-semibold py-2 rounded-full scale-105'} ${page !== 'people' && 'hover:bg-neutral-800/60 hover:scale-105 hover:text-white rounded-full py-2	'}`} onClick={() => setPage('people')}>
								<BsPeopleFill className="text-lg" />
								<span className="text-sm">People</span>
							</div>
							<div className={`flex flex-row gap-3 items-center transition-all duration-200 pl-4 ${page === 'shared' && 'bg-white/70 text-gray-900 font-semibold py-2 rounded-full scale-105'} ${page !== 'shared' && 'hover:bg-neutral-800/60 hover:scale-105 hover:text-white rounded-full py-2'}`} onClick={() => setPage('shared')}>
								<FaHouseChimneyUser className="text-lg" />
								<span className="text-sm">Shared</span>
							</div>
							<div className={`flex flex-row gap-3 items-center transition-all duration-200 pl-4 ${page === 'settings' && 'bg-white/70 text-gray-900 font-semibold py-2 rounded-full scale-105'} ${page !== 'settings' && 'hover:bg-neutral-800/60 hover:scale-105 hover:text-white rounded-full py-2'}`} onClick={() => setPage('settings')}>
								<RiSettingsFill className="text-lg" />
								<span className="text-sm">Settings</span>
							</div>
						</div>
					</div>
					<div className="w-full h-fit pl-4">
						{page === 'calendar' && <CalendarPage />}
						{page === 'people' && <span className="text-white text-3xl font-bold">People Page</span>}
						{page === 'shared' && <span className="text-white text-3xl font-bold">Shared Page</span>}
						{page === 'settings' && <span className="text-white text-3xl font-bold">Settings Page</span>}
					</div>
				</div>
			</div>
		</>
	)
}

export default App
