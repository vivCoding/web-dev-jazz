import { Dispatch, SetStateAction } from "react";
import { ItemType } from "./page";

interface TodoItemProps {
    item: ItemType,
    setItems: Dispatch<SetStateAction<ItemType[]>>
}

const TodoItem = ({ item, setItems }: TodoItemProps) => {
    console.log(`render TodoItem ${item.id}`)

    const doThing = () => {
        console.log(`rerendered li ${item.id}`)
        return ""
    }

    return (
        <li>
            {/* <button style={{ "margin-right": "1em"}} onClick$={() => onDelete(item.id)}>Delete</button> */}
            <button style={{ marginRight: "1em"}} onClick={() => setItems((prev) => prev.filter(it => it.id !== item.id))}>Delete</button>
           {`${item.item} ${doThing()}`}
        </li>
    )
}

export default TodoItem