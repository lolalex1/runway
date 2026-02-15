import React from "react"
import { FaTrash } from "react-icons/fa6"

import PickDate from "../datepicker"
import FrequencySelect from "../frequencyselect"
import MoneyInput from "../moneyinput"

interface AfterpaySegmentProps {
  onDelete: () => void
}

export default function AfterpaySegment({ onDelete }: AfterpaySegmentProps) {
  return (
    <div className="w-full h-fit bg-surface-elevated/40 rounded-lg p-2 px-4 border-2 border-surface-elevated">
      <div className="flex flex-row gap-3 items-center border-b-2 border-surface-elevated/60 p-2">
        <img src="/afterpay.png" alt="" className="w-10" />

        <input
          type="text"
          className="text-white font-bold text-xl outline-none w-full"
          placeholder="Name this segment..."
        />

        <div
          onClick={onDelete}
          className="p-2 bg-surface-elevated rounded-lg cursor-pointer hover:bg-border transition"
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
    </div>
  )
}
