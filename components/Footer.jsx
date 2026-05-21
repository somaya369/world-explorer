import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>World Explorer</h2>

          <p>
            Explore countries around the world with flags, capitals,
            populations, currencies, languages, and more.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/countries">Countries</Link>
          <Link href="/search">Search</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="footer-links">
          <h3>Popular Countries</h3>

          <Link href="/countries/AFG">Afghanistan</Link>
          <Link href="/countries/USA">United States</Link>
          <Link href="/countries/JPN">Japan</Link>
          <Link href="/countries/DEU">Germany</Link>
        </div>

        <div className="footer-contact">
          <h3>API</h3>

          <a
            href="https://restcountries.com/"
            target="_blank"
          >
            REST Countries API
          </a>

          <p>Built with Next.js 16</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 World Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}