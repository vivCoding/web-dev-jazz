import { Component } from "solid-js";
import { ItemType } from "~/routes/todo";

interface TodoItemProps {
    item: ItemType,
    onDelete: (val: number) => void
}

const TodoItem: Component<TodoItemProps> = (props) => {
    console.log(`render TodoItem ${props.item.id}`)

    const doThing = () => {
        console.log(`rerendered li ${props.item.id}`)
        return ""
    }

    return (
        <li>
            <button style={{ "margin-right": "1em"}} onClick={() => props.onDelete(props.item.id)}>Delete</button>
           {`${props.item.item} ${doThing()}`}
        </li>
    )
}

export default TodoItem