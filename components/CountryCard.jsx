"use client";

import Link from "next/link";

export default function CountryCard({ country }) {
  const addFavorite = () => {
    const oldFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadyExists = oldFavorites.find(
      (item) => item.code === country.cca3
    );

    if (alreadyExists) {
      alert(`${country.name.common} is already in favorites`);
      return;
    }

    const newFavorite = {
      name: country.name.common,
      code: country.cca3,
      flag: country.flags.png,
    };

    const updatedFavorites = [...oldFavorites, newFavorite];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    alert(`${country.name.common} added to favorites`);
  };

  return (
    <div className="country-card">
      <img src={country.flags.png} alt={country.name.common} />

      <div className="card-body">
        <h2>{country.name.common}</h2>

        <p>
          <strong>Capital:</strong> {country.capital?.[0] || "No capital"}
        </p>

        <p>
          <strong>Region:</strong> {country.region}
        </p>

        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>

        <div className="card-actions">
          <Link href={`/countries/${country.cca3}`} className="small-btn">
            View Details
          </Link>

          <button onClick={addFavorite} className="favorite-btn">
            ⭐ Favorite
          </button>
        </div>
      </div>
    </div>
  );
}