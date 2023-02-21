import Link from "next/link";

export default function Back() {

  const src = "/imgs/arrowBack.svg"

  return (
    <Link
      className="back"
      href="/">
      <img src={src} />
    </Link>
  );
}