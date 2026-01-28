import { useState } from 'react'
import './App.css'

// Pages
import CalendarPage from './pages/calendar'

function App() {
	const [page, setPage] = useState('calendar')

	return (
		<>
			<div className="w-screen h-screen bg-bg pt-24 flex flex-col items-center">
				<div className="w-3/4 h-fit p-4 rounded-lg bg-surface-elevated flex flex-row justify-between items-center">
					<div className="flex flex-col gap-2">
						<span className="text-white font-bold text-2xl">Welcome back, Alex!</span>
						<span className="text-white/70 px-2">Let's check out what Runway forecasts today!</span>
					</div>
					<span className="bg-surface p-2 rounded-sm text-center text-4xl font-black">$5,000</span>
				</div>
				<div className="w-3/4 h-full flex flex-row pt-5">
					<div className="w-1/5 h-full flex flex-col gap-1 border-r-2 border-surface">
						<div className='ml-8 text-lg gap-4 flex flex-col text-gray-400 cursor-pointer h-fit'>
							<span className={`transition-all duration-200 ${page === 'calendar' && 'text-white text-2xl'}`} onClick={() => setPage('calendar')}>Calendar</span>
							<span className={`transition-all duration-200 ${page === 'people' && 'text-white text-2xl'}`} onClick={() => setPage('people')}>People</span>
							<span className={`transition-all duration-200 ${page === 'shared' && 'text-white text-2xl'}`} onClick={() => setPage('shared')}>Shared</span>
							<span className={`transition-all duration-200 ${page === 'settings' && 'text-white text-2xl'}`} onClick={() => setPage('settings')}>Settings</span>
						</div>
					</div>
					<div className="w-full h-fit px-4">
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
