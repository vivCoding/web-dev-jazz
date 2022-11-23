import { component$, Slot } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

export default component$(() => {
  console.log("rendering layout")

  return (
    <>
      <title>Qwik</title>
      <Link href="/">Home</Link>{' '}
      <Link href="/count/">Counter</Link>{' '}
      <Link href="/todo/">Todo</Link>
      <Slot />
    </>
  );
});

export const head: DocumentHead = {
  title: "QwikCity"
}