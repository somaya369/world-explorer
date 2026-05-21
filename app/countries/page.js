import CountryCard from "@/components/CountryCard";

export default async function CountriesPage() {
  // This page can be statically rendered and cached.
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3",
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    return <h1 className="page-title">Failed to load countries</h1>;
  }

  const countries = await res.json();

  if (!Array.isArray(countries)) {
    return <h1 className="page-title">Countries data is not available</h1>;
  }

  return (
    <section>
      <h1 className="page-title">Explore Countries</h1>

      <div className="country-grid">
        {countries.slice(0, 30).map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </section>
  );
}