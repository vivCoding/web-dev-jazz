import { Component, createSignal, JSX } from "solid-js";
import { ItemType } from "~/routes/todo";

interface AddInputProps {
    onModify: (id: number, newItem: string) => void,
    items: ItemType[]
}

const ModifyItem: Component<AddInputProps> = (props) => {
    console.log("rendering ModifyInput")
    const [idx, setIdx] = createSignal<number>()
    const [newItem, setNewItem] = createSignal("")

    const handleModify = () => {
        if (newItem() !== "") {
            props.onModify(idx() - 1, newItem())
        }
    }

    const handleIdChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
        setIdx(e.currentTarget.valueAsNumber)
        const idx = e.currentTarget.valueAsNumber
        setNewItem(idx > 0 && idx <= props.items.length ? props.items[idx - 1].item : "")
    }

    const doThing = () => {
        console.log("rerendered modifyInput")
        return ""
    }

    return (
        <div>
            <label>Modify: </label>
            <input onInput={handleIdChange} type="number" placeholder="ID"/>
            <input onChange={(e) => setNewItem(e.currentTarget.value)} value={`${newItem()}${doThing()}`} placeholder="New item"/>
            <button onClick={handleModify}>Modify</button>
        </div>
    )
}

export default ModifyItem