import { A, Outlet } from "solid-start";

export default function IndexLayout() {
    console.log("rendering index")
    return (
      <div>
        <A href="/">Home</A>{' '}
        <A href="/count">Counter</A>{' '}
        <A href="/todo">Todo</A>
        <Outlet />
      </div>
    );
  }
  