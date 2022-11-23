import { Component } from "solid-js";
import { SetStoreFunction } from "solid-js/store";
import { ItemType } from "~/routes/todo";

interface TodoItemProps {
    item: ItemType,
    onDelete: (val: number) => void,
    setItems?: SetStoreFunction<ItemType[]>
}

const TodoItem: Component<TodoItemProps> = (props) => {
    console.log(`render TodoItem ${props.item.id}`)

    const doThing = () => {
        console.log(`rerendered li ${props.item.id}`)
        return ""
    }

    return (
        <li>
            {/* <button style={{ "margin-right": "1em"}} onClick={() => props.onDelete(props.item.id)}>Delete</button> */}
            <button style={{ "margin-right": "1em"}} onClick={() => props.setItems(ls => ls.filter((item) => item.id !== props.item.id))}>Delete</button>
           {`${props.item.item} ${doThing()}`}
        </li>
    )
}

export default TodoItem