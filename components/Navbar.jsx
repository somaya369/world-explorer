"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <h2>World Explorer</h2>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/countries">Countries</Link>
        <Link href="/search">Search</Link>
        <Link href="/about">About</Link>

        <button onClick={() => setDarkMode(!darkMode)} className="dark-btn">
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}