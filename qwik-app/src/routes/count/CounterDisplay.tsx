import { component$ } from "@builder.io/qwik";

interface CounterDisplayProps {
    countValue: number
}


const CounterDisplay = component$<CounterDisplayProps>(({ countValue }) => {
    console.log("rendering CounterDisplay")

    const doThing = (p: number) => {
        console.log(`rerendered p${p}`)
        return ""
    }

    return (
        <div>
            <p>same element: {countValue} {doThing(1)}</p>
            <p>same string: {`${countValue} ${doThing(2)}`}</p>
        </div>
    )
})

export default CounterDisplay