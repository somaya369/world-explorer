import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <h1>World Explorer</h1>
      <p>
        Explore countries around the world and learn about their flags,
        capitals, populations, currencies, languages, and time zones.
      </p>

      <Link href="/countries" className="btn">
        Explore Countries
      </Link>
    </section>
  );
}