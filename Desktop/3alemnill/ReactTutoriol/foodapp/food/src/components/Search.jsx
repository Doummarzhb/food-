// import React, { useState, useEffect } from 'react';
// import styles from './search.module.css';
// const URL = `https://api.spoonacular.com/recipes/complexSearch`;
// const API_KEY = "9ee31fd8ffe4407195e0cc04e52307cc";

// export default function Search({ setFoodData }) {
//   const [query, setQuery] = useState("pizza");

//   useEffect(() => {
//     async function fetchFood() {
//       try {
//         const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
//         const data = await res.json();
//         console.log(data.results);
//         setFoodData(data.results);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchFood();
//   }, [query, setFoodData]);

//   return (
//     <div className={styles.searchContainer}>
//       <input className={styles.input}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         type="text"
//         placeholder="Search..."
//       />
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9ee31fd8ffe4407195e0cc04e52307cc";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchFood();
  }, [query, setFoodData]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}
