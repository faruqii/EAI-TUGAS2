import React, { useState } from "react";
import styles from "../styles/styles.module.css";
import Link from "next/link";

interface SearchParams {
  location: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  infants: number;
  currency: string;
}

export default function App() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    infants: 0,
    currency: "USD",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(searchParams);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
      {/* <Link href="/">
        <a className={styles.logo}>Travel App</a>
      </Link> */}
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            type="text"
            name="location"
            placeholder="Where are you going?"
            className={styles.searchInput}
            value={searchParams.location}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="checkIn"
            placeholder="Check-in date"
            className={styles.searchInput}
            value={searchParams.checkIn}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="checkOut"
            placeholder="Check-out date"
            className={styles.searchInput}
            value={searchParams.checkOut}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="adults"
            placeholder="Adults"
            className={styles.searchInput}
            value={searchParams.adults}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="children"
            placeholder="Children"
            className={styles.searchInput}
            value={searchParams.children}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="infants"
            placeholder="Infants"
            className={styles.searchInput}
            value={searchParams.infants}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="currency"
            placeholder="Currency"
            className={styles.searchInput}
            value={searchParams.currency}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Find your next adventure</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
          sapien ut metus commodo interdum.
        </p>
      </main>
    </div>
  );
}