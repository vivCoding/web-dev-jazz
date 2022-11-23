"use client";

import { useState } from "react"
import CounterDisplay from "./CounterDisplay"

export default function Counter() {
    console.log("rendering Counter")
    const [count, setCount] = useState(0)
    const [addValue, setAddValue] = useState(0)

    const doThing = (id: number) => {
        console.log(`rerendered b${id}`)
        return ""
    }

    return (
        <div>
            <CounterDisplay countValue={count} />
            <button onClick={() => setCount(count + 1)}>Increment {doThing(1)}</button>
            <button onClick={() => setCount(count - 1)}>Decrement {doThing(2)}</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <div style={{ marginTop: "1em" }}>
                <label>Add value: </label>
                <input type="number" onChange={(e) => setAddValue(e.currentTarget.valueAsNumber)}/>
                <button onClick={() => setCount(count + addValue)}>Add</button>
            </div>
        </div>
    )
}