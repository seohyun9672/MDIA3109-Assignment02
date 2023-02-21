import Link from "next/link"

export default function Logobar() {
  return <Link href="/" className="logobar">
    <img className ="logo-img" src="/imgs/logo.svg" />
  </Link>
}