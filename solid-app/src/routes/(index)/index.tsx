import { signIn, signOut } from "@auth/solid-start/client"

export default function Home() {
  console.log("rendering index")

  return (
    <div>
      <h1>SolidJS</h1>
      <p>A pretty cool website</p>
      <button onClick={() => signIn()}>Login</button>
      <button onClick={() => signOut()}>Logut</button>
    </div>
  )
}
