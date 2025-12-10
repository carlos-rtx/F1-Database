// app/_not-found/page.js
import Link from "next/link"
export default function NotFoundPage() {
  return (
    <>
      <h1>TODO: Extend the not found page</h1>
      <h2>Http code: 404</h2>
      <Link href="/">
        Return to main page
      </Link>
    </>
  )
}
