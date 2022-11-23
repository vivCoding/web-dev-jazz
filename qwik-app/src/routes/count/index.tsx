import { component$ } from '@builder.io/qwik';
import Counter from './Counter';

export default component$(() => {
  // console.log("rendering count")
  return (
    <div>
      <h1>Counter</h1>
      <p>Also kinda demonstrates how state and rerendering works</p> 
      <Counter />
    </div>
  );
});
