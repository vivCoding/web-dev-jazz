"use client";

import { useRef, useState } from "react"
import AddInput from "./AddInput";
import ModifyItem from "./ModifyInput";
import TodoItem from "./TodoItem"

export interface ItemType {
    id: number
    item: string
}


export default function Todo() {
    console.log("rendering todo")
    const [items, setItems] = useState<ItemType[]>([
        { id: 1, item: "do work"},
        { id: 2, item: "do stuff"},
        { id: 3, item: "do jazz"},
    ])
    const ct = useRef(items.length)

    const addItem = (newItem: string) => {
        setItems([...items, { id: ++ct.current, item: newItem }])
    }

    const modifyItem = (idx: number, newItem: string) => {
        const newItems = [...items]
        newItems[idx].item = newItem
        setItems(newItems)
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
            <br></br>
            <ModifyItem items={items} onModify={modifyItem} />
            <ol>
                {items.map((item, idx) => {
                    doThing(idx)
                    // return <TodoItem item={item} onDelete={deleteItem}/>
                    return <TodoItem key={item.id} item={item} setItems={setItems}/>
                })}
            </ol>
        </div>
    )
}