import Counter from "~/components/Counter"

export default function Count() {
  console.log("rendering count")
  return (
    <div>
      <h1>Counter</h1>
      <p>
        Also kinda demonstrates how state and rerendering works. View console
      </p>
      <Counter />
    </div>
  )
}
