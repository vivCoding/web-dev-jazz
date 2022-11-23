import { component$, QRL } from "@builder.io/qwik";
import { ItemType } from ".";

interface TodoItemProps {
    item: ItemType,
    onDelete$?: QRL<(val: number) => void>
    items?: ItemType[]
}

const TodoItem = component$<TodoItemProps>(({ item, onDelete$, items }) => {
    // console.log(`render TodoItem ${item.id}`)

    const doThing = () => {
        // console.log(`rerendered li ${item.id}`)
        return ""
    }

    return (
        <li>
            {/* <button style={{ "margin-right": "1em"}} onClick$={() => onDelete(item.id)}>Delete</button> */}
            <button style={{ "margin-right": "1em"}} onClick$={() => items?.splice(items.findIndex(it => it.id === item.id), 1)}>Delete</button>
           {`${item.item} ${doThing()}`}
        </li>
    )

})

export default TodoItem