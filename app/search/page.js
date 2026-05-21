import CountrySearch from "@/components/CountrySearch";

export default async function SearchPage() {
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
      <h1 className="page-title">Search Countries</h1>
      <CountrySearch countries={countries} />
    </section>
  );
}