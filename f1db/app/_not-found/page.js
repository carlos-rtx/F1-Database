// app/_not-found/page.js
import Link from "next/link"
export default function NotFoundPage() {
  return (
    <>
      <h1>Page not found</h1>
      <Link href="/">
        Return to main page
      </Link>
    </>
  )
}
