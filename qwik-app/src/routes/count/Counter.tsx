import { component$, useSignal } from '@builder.io/qwik';
import CounterDisplay from './CounterDisplay';

const Counter = component$(() => {
    // console.log("rendering Counter")
    const count = useSignal(0)
    const addValue = useSignal<number>(0)

    const doThing = (id: number) => {
        // console.log(`rerendered b${id}`)
        return ""
    }

    return (
        <div>
            <CounterDisplay countValue={count.value} />
            <button onClick$={() => count.value++}>Increment {doThing(1)}</button>
            <button onClick$={() => count.value--}>Decrement {doThing(2)}</button>
            <button onClick$={() => count.value = 0}>Reset</button>
            <div style={{
                "margin-top": "1em",
            }}>
                <label>Add value: </label>
                <input type="number" onChange$={(e) => addValue.value = e.target.valueAsNumber ?? 0}/>
                <button onClick$={() => count.value += !isNaN(addValue.value) ? addValue.value : 0}>Add</button>
            </div>
        </div>
    )
})

export default Counter