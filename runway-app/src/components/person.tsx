import React, { useState, type JSX } from 'react'

import { FaChevronDown } from "react-icons/fa6";
import { RiSettingsFill } from "react-icons/ri";

import { cn } from '@/lib/utils';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import AfterpaySegment from './segments/afterpay';

interface PersonProps {
    name: string;
    role?: string;
    segmentsCount?: number;
    color?: string | "surface";
    image?: string;
}

const colorMap: Record<string, string> = {
    pink: "bg-pink-300/50",
    blue: "bg-blue-400/40",
    green: "bg-green-400/40",
    red: "bg-red-400/40",
    purple: "bg-purple-400/40",
}

// Structure our segments:

type SegmentType = "afterpay" | "food" | "subscription";

type Segment = {
    id: string;
    type: SegmentType;
};

export default function Person(props: PersonProps) {
    const [isOpen, setIsOpen] = useState(true);

    // Soon, this will all be managed via database/API, for now lets make it local state
    const [segments, setSegments] = useState<Segment[]>([]);

    const addSegment = (type: SegmentType) => {
        setSegments(prev => [...prev, { id: crypto.randomUUID(), type }]);
    };

    const removeSegment = (id: string) => {
        setSegments(prev => prev.filter(s => s.id !== id));
    };

    const renderSegment: Record<SegmentType, (id: string) => JSX.Element> = {
        afterpay: (id) => <AfterpaySegment onDelete={() => removeSegment(id)} />,
        food: (id) => <div className="text-white">Food segment (todo) {id}</div>,
        subscription: (id) => <div className="text-white">Subscription segment (todo) {id}</div>,
    };

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full h-fit flex flex-col select-none"
        >
            <div className={`flex flex-row justify-between items-center p-4 transition-all duration-200 ${colorMap[props.color ?? "surface"] ?? "bg-surface"} ${isOpen ? 'rounded-t-lg' : 'rounded-lg'}`}>
                <div className="flex flex-row gap-3 items-center">
                    <div className="w-14 h-14 rounded-sm bg-surface-elevated">
                        {props.image && <img src={props.image} alt={props.name} className="w-full h-full object-cover rounded-sm" />}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-lg font-bold">{props.name}</span>
                        <span className="text-gray-400 text-xs px-2 p-1 bg-surface-elevated rounded-sm text-center">{props.role}</span>
                    </div>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <div className="flex flex-col gap-1 items-center mr-4">
                        <span className="text-gray-200 font-semibold text-xs">SEGMENTS</span>
                        <span className="text-white font-black text-lg">{props.segmentsCount}</span>
                    </div>
                    <div className="rounded-sm bg-surface-elevated p-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-border">
                        <RiSettingsFill className={`text-white text-lg transition-all duration-200 hover:rotate-360 hover:scale-125`} />
                    </div>
                    <CollapsibleTrigger asChild>
                        <div className="rounded-sm bg-surface-elevated p-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-border">
                            <FaChevronDown className={`transition-all duration-200 ${isOpen ? '-rotate-180' : ''} text-white text-lg`} />
                        </div>
                    </CollapsibleTrigger>
                </div>
            </div>
            <CollapsibleContent
                className={cn(
                    "bg-surface/40 p-4 rounded-b-lg text-popover-foreground outline-none",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out",
                    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
                )}
            >
                <div className="flex flex-col gap-5 w-full h-fit">
                    {segments.length === 0 ? (
                        <div className="text-gray-400 text-sm italic">
                            No segments yet — add one below.
                        </div>
                    ) : (
                        segments.map((seg) => (
                            <div key={seg.id}>
                                {renderSegment[seg.type](seg.id)}
                            </div>
                        ))
                    )}
                </div>
                <div className="w-full h-0.5 bg-surface my-4"></div>
                <div className="flex flex-col gap-1">
                    <span className="text-white font-medium text-sm">New segment</span>
                    <span className="text-gray-400 text-xs italic px-0.5">Choose from one of the following sandbox segments</span>
                    <div className="flex flex-row gap-5 h-fit w-full mt-2">
                        <div onClick={() => addSegment("afterpay")} className="h-24 w-24 rounded-sm bg-surface-elevated cursor-pointer transition-all duration-200 hover:bg-border flex items-center justify-center flex-col gap-1">
                            <img src="/afterpay.png" alt="" className="w-12" />
                            <span className="text-white font-semibold text-xs">Afterpay</span>
                        </div>
                        <div onClick={() => addSegment("food")} className="h-24 w-24 rounded-sm bg-surface-elevated cursor-pointer transition-all duration-200 hover:bg-border flex items-center justify-center flex-col gap-1">
                            <img src="/food.png" alt="" className="w-12" />
                            <span className="text-white font-semibold text-xs">Food/Lunch</span>
                        </div>
                        <div onClick={() => addSegment("subscription")} className="h-24 w-24 rounded-sm bg-surface-elevated cursor-pointer transition-all duration-200 hover:bg-border flex items-center justify-center flex-col gap-1">
                            <img src="/subscription.png" alt="" className="w-12" />
                            <span className="text-white font-semibold text-xs">Subscription</span>
                        </div>
                    </div>
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}
