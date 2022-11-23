import { $, component$, useSignal, useStore } from "@builder.io/qwik"
import AddInput from "./AddInput"
import ModifyItem from "./ModifyInput"
import TodoItem from "./TodoItem"

export interface ItemType {
    id: number
    item: string
}

export default component$(() => {
    console.log("rendering todo")
    const items = useStore<ItemType[]>([
        { id: 1, item: "do work"},
        { id: 2, item: "do stuff"},
        { id: 3, item: "do jazz"},
    ], { recursive: true })
    const ct = useSignal(items.length)

    const addItem = $((newItem: string) => {
        items.push({ id: ++ct.value, item: newItem })
    })

    const modifyItem = $((idx: number, newItem: string) => {
        items[idx].item = newItem
    })

    const deleteItem = $((id: number) => {
        items.splice(items.findIndex(item => item.id === id), 1)
    })

    const doThing = (idx: number) => {
        console.log("rendering item", idx, "in loop")
        return ""
    }

    return (
        <div>
            <h1>Todo List</h1>
            <p>Check console to see how state affects rerenders</p>
            <AddInput onAddNew$={addItem}/>
            <br></br>
            <ModifyItem items={items} onModify$={modifyItem} />
            <ol>
                {items.map((item, idx) => {
                    doThing(idx)
                    // return <TodoItem item={item} onDelete={deleteItem}/>
                    return <TodoItem item={item} items={items}/>
                })}
            </ol>
        </div>
    )
})