import { component$, useSignal, $, QRL } from "@builder.io/qwik";
import { ItemType } from ".";

interface ModifyItemProps {
    items: ItemType[],
    onModify$: QRL<(id: number, newItem: string) => void>
}

const ModifyItem = component$<ModifyItemProps>(({ items, onModify$ }) => {
    console.log("rendering ModifyInput")
    const idx = useSignal<number>(0)
    const newItem = useSignal("")

    const handleModify = $(() => {
        if (newItem.value !== "") {
            // items[idx.value - 1].item = newItem.value
            onModify$(idx.value - 1, newItem.value)
        }
    })

    const handleIdChange = $((e: Event) => {
        idx.value = (e.target as HTMLInputElement).valueAsNumber
        newItem.value = idx.value > 0 && idx.value <= items.length ? items[idx.value - 1].item : ""
    })

    const doThing = () => {
        console.log("rerendered modifyInput")
        return ""
    }

    return (
        <div>
            <label>Modify: </label>
            <input onInput$={handleIdChange} type="number" placeholder="ID"/>
            <input onChange$={(e) => newItem.value = e.target.value} value={`${newItem.value}${doThing()}`} placeholder="New item"/>
            <button onClick$={handleModify}>Modify</button>
        </div>
    )
})

export default ModifyItem