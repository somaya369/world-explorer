import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { code } = await params;

  return {
    title: `Country - ${code}`,
  };
}

export default async function CountryDetailsPage({ params }) {
  const { code } = await params;

  // This page fetches fresh data every time.
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const country = data[0];

  if (!country) {
    notFound();
  }

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "No languages";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => `${currency.name} ${currency.symbol || ""}`)
        .join(", ")
    : "No currency";

  return (
    <section className="details-page">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="details-flag"
      />

      <h1>{country.name.common}</h1>

      <div className="details-box">
        <p><strong>Official Name:</strong> {country.name.official}</p>
        <p><strong>Capital:</strong> {country.capital?.[0] || "No capital"}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Subregion:</strong> {country.subregion || "No subregion"}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Languages:</strong> {languages}</p>
        <p><strong>Currencies:</strong> {currencies}</p>
        <p><strong>Time Zones:</strong> {country.timezones.join(", ")}</p>
      </div>

      <div className="details-actions">
        <a href={country.maps.googleMaps} target="_blank" className="btn">
          View on Google Maps
        </a>

        <Link href="/countries" className="small-btn">
          Back to Countries
        </Link>
      </div>
    </section>
  );
}