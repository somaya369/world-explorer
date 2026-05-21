export default function AboutPage() {
  return (
    <section className="about-page">
      <h1>About World Explorer</h1>

      <p>
        World Explorer is a Next.js project that allows users to explore
        countries around the world using real API data.
      </p>

      <p>
        This project uses the REST Countries API to display country names,
        flags, capitals, populations, regions, languages, currencies, time
        zones, and Google Maps links.
      </p>

      <p>
        In this project, I practiced App Router, file-based routing, shared
        layouts, dynamic routes, server components, client components, data
        fetching with async/await, caching, static rendering, and dynamic
        rendering.
      </p>

      <p>
        Bonus features include region filtering, population sorting, dark mode,
        loading page, custom 404 page, dynamic metadata, responsive design, and
        favorite countries using a client component.
      </p>
    </section>
  );
}