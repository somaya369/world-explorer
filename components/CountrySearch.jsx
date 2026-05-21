"use client";

import { useState } from "react";
import Link from "next/link";

export default function CountrySearch({ countries }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  let filteredCountries = countries.filter((country) => {
    const name = country.name?.common || "";
    const countryRegion = country.region || "";

    const matchesSearch = name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion =
      region === "All" || countryRegion === region;

    return matchesSearch && matchesRegion;
  });

  if (sortOrder === "asc") {
    filteredCountries = [...filteredCountries].sort(
      (a, b) => a.population - b.population
    );
  }

  if (sortOrder === "desc") {
    filteredCountries = [...filteredCountries].sort(
      (a, b) => b.population - a.population
    );
  }

  return (
    <div>
      <div className="filters">
        <input
          className="search-input"
          type="text"
          placeholder="Search country..."
          value={search}
          onInput={(e) => setSearch(e.target.value)}
        />

        <select
          className="select-box"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="All">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          className="select-box"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort Population</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <p className="result-count">
        Search: {search || "None"} | Results: {filteredCountries.length}
      </p>

      <div className="country-grid">
        {filteredCountries.map((country) => (
          <div className="country-card" key={country.cca3}>
            <img src={country.flags.png} alt={country.name.common} />

            <div className="card-body">
              <h2>{country.name.common}</h2>

              <p>
                <strong>Capital:</strong>{" "}
                {country.capital?.[0] || "No capital"}
              </p>

              <p>
                <strong>Region:</strong> {country.region}
              </p>

              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>

              <Link href={`/countries/${country.cca3}`} className="small-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}