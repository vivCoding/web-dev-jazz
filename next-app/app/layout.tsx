import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("rendering layout")

  return (
    <html>
      <head />
      <body>
        <div>
          <Link href={"/"} >Home</Link>{' '}
          <Link href={"/count"} >Count</Link>{' '}
          <Link href={"/todo"} >Todo</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
