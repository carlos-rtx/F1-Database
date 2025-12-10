import Link from "next/link"
export default function HealthCheck(){
  return (
    <>
      <h1>Engine check: Ok
      </h1>
      <h2>Everything seems ok, if you are experiencing de problems with this website</h2>
      <Link href="/">
        Click here
      </Link>
    </>
  )
}