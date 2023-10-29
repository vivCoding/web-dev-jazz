import { For } from "solid-js"
import { createStore } from "solid-js/store"
import AddInput from "~/components/Todo/AddInput"
import ModifyItem from "~/components/Todo/ModifyInput"
import TodoItem from "~/components/Todo/TodoItem"

export interface ItemType {
  id: number
  item: string
}

export default function Todo() {
  console.log("rendering todo")
  const [items, setItems] = createStore<ItemType[]>([
    { id: 1, item: "do work" },
    { id: 2, item: "do stuff" },
    { id: 3, item: "do jazz" },
  ])
  let ct = items.length

  const addItem = (newItem: string) => {
    setItems((ls) => [...ls, { id: ++ct, item: newItem }])
  }

  const modifyItem = (idx: number, newItem: string) => {
    setItems(idx, "item", newItem)
  }

  const deleteItem = (id: number) => {
    setItems((ls) => ls.filter((item) => item.id !== id))
  }

  const doThing = (idx: number) => {
    console.log("rendering item", idx, "in loop")
    return ""
  }

  return (
    <div>
      <h1>Todo List</h1>
      <p>Check console to see how state affects rerenders</p>
      <AddInput onAddNew={addItem} />
      <br />
      <ModifyItem items={items} onModify={modifyItem} />
      {/* <ModifyItem items={items} onModify={modifyItem} setItems={setItems}/> */}
      <ol>
        <For each={items}>
          {(item, idx) => {
            doThing(idx())
            // return <TodoItem item={item} onDelete={deleteItem} setItems={setItems}/>
            return <TodoItem item={item} setItems={setItems} />
          }}
        </For>
      </ol>
    </div>
  )
}
