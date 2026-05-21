import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>

      <Link href="/" className="btn">
        Go Home
      </Link>
    </div>
  );
}