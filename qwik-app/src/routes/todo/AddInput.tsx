import { component$, useSignal, $, QRL } from "@builder.io/qwik";

interface AddInputProps {
    onAddNew$: QRL<(newItem: string) => void>
}

const AddInput = component$<AddInputProps>(({ onAddNew$ }) => {
    console.log("rendering AddInput")
    const newItem = useSignal("")

    const handleAdd = $(() => {
        if (newItem.value !== "") {
            onAddNew$(newItem.value)
            newItem.value = ""
        }
    })

    const doThing = () => {
        console.log("rerendered addInput")
        return ""
    }

    return (
        <div>
            <label>Add New: </label>
            <input
                onChange$={(e) => newItem.value = e.target.value}
                // value={`${doThing()}`}
                value={`${newItem.value}${doThing()}`}
            />
            <button onClick$={handleAdd}>Add</button>
        </div>
    )
})

export default AddInput