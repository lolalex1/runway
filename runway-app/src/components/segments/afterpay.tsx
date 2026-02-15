import React from "react"
import { FaTrash } from "react-icons/fa6"
import { IoInformationCircle } from "react-icons/io5";

import PickDate from "../datepicker"
import FrequencySelect from "../frequencyselect"
import MoneyInput from "../moneyinput"

interface AfterpaySegmentProps {
    onDelete: () => void
}

export default function AfterpaySegment({ onDelete }: AfterpaySegmentProps) {
    return (
        <div className="w-full h-fit bg-surface-elevated/40 rounded-lg p-2 px-4 border-2 border-surface-elevated">
            <div className="flex flex-row gap-3 items-center p-2">
                <div className="flex flex-row gap-1 bg-surface-elevated rounded-lg w-fit p-2 items-center">
                    <img src="/afterpay.png" alt="" className="w-10" />
                    <span className="text-white font-bold text-2xl">Afterpay</span>
                </div>

                <input
                    type="text"
                    className="text-white font-bold text-xl outline-none grow p-3 border-2 border-surface-elevated/80 rounded-lg"
                    placeholder="Name this segment..."
                />

                <div
                    onClick={onDelete}
                    className="p-4.5 bg-surface-elevated rounded-lg cursor-pointer hover:bg-border transition"
                >
                    <FaTrash className="text-white text-lg" />
                </div>
            </div>

            <div className="flex flex-row items-center justify-evenly p-4">
                <FrequencySelect />
                <MoneyInput />
                <PickDate label="Afterpay Start Date" />
                <PickDate label="Afterpay End Date" />
            </div>

            <div className="w-full h-fit p-2 py-4 border-t-2 border-dashed border-surface-elevated mt-4 flex flex-col">
                <div className="flex flex-row items-center justify-between">
                    <div className="bg-surface-elevated/40 text-gray-300 border-2 border-surface-elevated rounded-sm text-center p-1 px-4 font-semibold text-xl cursor-pointer transition-all duration-200 hover:bg-surface-elevated hover:text-white">+ Add a Shortplan</div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-surface-elevated/40 text-gray-300 border-2 border-surface-elevated rounded-sm text-center p-1 px-4 font-semibold text-xl cursor-pointer transition-all duration-200 hover:bg-surface-elevated hover:text-white">Cancel</div>
                        <div className="bg-teal-200/40 shadow-lg shadow-teal-400/40 text-gray-300 border-2 border-teal-300/40 rounded-lg text-center p-1 px-6 font-semibold text-xl cursor-pointer transition-all duration-200 hover:bg-teal-600 hover:text-white">Submit</div>
                    </div>
                </div>
                <span className="text-gray-400 text-xs mt-2 inline-block px-4">
                    <IoInformationCircle className="inline-block mr-1 mb-0.5" />
                    Shortplan is intended for <span className="font-semibold text-white">short</span>-term Afterpay installments with a maximum duration of 4 weeks.
                </span>
            </div>

        </div>
    )
}
