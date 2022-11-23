import { component$ } from "@builder.io/qwik";

interface CounterDisplayProps {
    countValue: number
}


const CounterDisplay = component$<CounterDisplayProps>(({ countValue }) => {
    // console.log("rendering CounterDisplay")

    const doThing = (p: number) => {
        // console.log(`rerendered p${p}`)
        return ""
    }

    return (
        <div>
            <p>{Math.random().toString(36).slice(2)}, {countValue} {doThing(1)}</p>
            <p>{`${Math.random().toString(36).slice(2)} + ${countValue} ${doThing(2)}`}</p>
        </div>
    )
})

export default CounterDisplay