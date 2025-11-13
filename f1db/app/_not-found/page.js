// app/_not-found/page.js
export default function NotFoundPage() {
  const homePage = "../page.jsx"
  return (
    <>
      <h1>Page not found</h1>
      <a href={homePage}>
        Return to main page
      </a>
    </>
  )
}
