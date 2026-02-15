import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Field, FieldLabel } from "./ui/field"

export default function FrequencySelect() {
    return (
        <Field className="mx-auto w-44">
            <FieldLabel>Payment Frequency</FieldLabel>
            <Select>
                <SelectTrigger className="w-full max-w-48">
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectGroup>
                        <SelectLabel>Frequency</SelectLabel>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
    )
}
