import type { Component, JSX } from "solid-js"
import { createSignal } from "solid-js"
import type { ItemType } from "~/routes/(index)/todo"

interface ModifyInputProps {
  onModify: (id: number, newItem: string) => void
  items: ItemType[]
}

const ModifyItem: Component<ModifyInputProps> = (props) => {
  console.log("rendering ModifyInput")
  const [idx, setIdx] = createSignal<number>()
  const [newItem, setNewItem] = createSignal("")

  const handleModify = () => {
    if (newItem() !== "") {
      props.onModify(idx() - 1, newItem())
      // props.setItems(idx() - 1, "item", newItem())
    }
  }

  const handleIdChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (
    e
  ) => {
    setIdx(e.currentTarget.valueAsNumber)
    const idx = e.currentTarget.valueAsNumber
    setNewItem(
      idx > 0 && idx <= props.items.length ? props.items[idx - 1].item : ""
    )
  }

  const doThing = () => {
    console.log("rerendered modifyInput")
    return ""
  }

  return (
    <div>
      <label>Modify: </label>
      <input onInput={handleIdChange} type="number" placeholder="ID" />
      <input
        onChange={(e) => setNewItem(e.currentTarget.value)}
        value={`${newItem()}${doThing()}`}
        placeholder="New item"
      />
      <button onClick={handleModify}>Modify</button>
    </div>
  )
}

export default ModifyItem
