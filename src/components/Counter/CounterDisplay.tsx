import { Component } from "solid-js"

interface CounterDisplayProps {
    countValue: number
}

const CounterDisplay: Component<CounterDisplayProps> = (props) => {
    console.log("rendering CounterDisplay")

    const doThing = (p: number) => {
        console.log(`rerendered p${p}`)
        return ""
    }

    return (
        <div>
            <p>{Math.random().toString(36).slice(2)}, {props.countValue} {doThing(1)}</p>
            <p>{`${Math.random().toString(36).slice(2)} + ${props.countValue} ${doThing(2)}`}</p>
        </div>
    )
}

export default CounterDisplay
  