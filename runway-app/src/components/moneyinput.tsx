import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "./ui/field"

export default function MoneyInput() {
    return (
        <>
            <Field className="mx-auto w-44">
                <FieldLabel>Payment Amount</FieldLabel>
                <Input placeholder="Enter amount" />
            </Field>
        </>
    )
}
