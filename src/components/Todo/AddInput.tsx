import { Component, createSignal } from "solid-js";

interface AddInputProps {
    onAddNew: (newItem: string) => void
}

const AddInput: Component<AddInputProps> = (props) => {
    console.log("rendering AddInput")
    const [newItem, setNewItem] = createSignal("")

    const handleAdd = () => {
        if (newItem() !== "") {
            props.onAddNew(newItem())
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
                // value={`${doThing()}`}
                value={`${newItem()}${doThing()}`}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddInput