import type { Component } from "solid-js"

interface CounterDisplayProps {
  countValue: number
}

const CounterDisplay: Component<CounterDisplayProps> = (props) => {
  console.log("rendering CounterDisplay")

  const doThing = (p: number) => {
    console.log(`rerendered p${p}`)
    return ""
  }

  return (
    <div>
      <p>
        same element: {props.countValue} {doThing(1)}
      </p>
      <p>same string: {`${props.countValue} ${doThing(2)}`}</p>
    </div>
  )
}

export default CounterDisplay
