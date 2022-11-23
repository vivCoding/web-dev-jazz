import { useState } from "react"

interface AddInputProps {
    onAddNew: (newItem: string) => void
}

const AddInput = ({ onAddNew }: AddInputProps) => {
    console.log("rendering AddInput")
    const [newItem, setNewItem] = useState("")

    const handleAdd = () => {
        if (newItem !== "") {
            onAddNew(newItem)
            setNewItem("")
        }
    }

    const doThing = () => {
        console.log("rerendered addInput")
        return ""
    }

    return (
        <div>
            <label>Add New: </label>
            <input
                onChange={(e) => setNewItem(e.currentTarget.value)}
                value={`${newItem}${doThing()}`}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddInput