import { FormEventHandler, useState } from "react";
import { ItemType } from "./page";

interface ModifyInputProps {
    onModify: (id: number, newItem: string) => void,
    items: ItemType[],
}

const ModifyItem = ({ onModify, items }: ModifyInputProps) => {
    console.log("rendering ModifyInput")
    const [idx, setIdx] = useState(0)
    const [newItem, setNewItem] = useState("")

    const handleModify = () => {
        if (newItem !== "") {
            onModify(idx - 1, newItem)
            // props.setItems(idx() - 1, "item", newItem())
        }
    }

    const handleIdChange: FormEventHandler<HTMLInputElement> = (e) => {
        const idx = e.currentTarget.valueAsNumber
        setIdx(idx)
        setNewItem(idx > 0 && idx <= items.length ? items[idx - 1].item : "")
    }

    const doThing = () => {
        console.log("rerendered modifyInput")
        return ""
    }

    return (
        <div>
            <label>Modify: </label>
            <input onInput={handleIdChange} type="number" placeholder="ID"/>
            <input onChange={(e) => setNewItem(e.currentTarget.value)} value={`${newItem}${doThing()}`} placeholder="New item"/>
            <button onClick={handleModify}>Modify</button>
        </div>
    )
}

export default ModifyItem