import AnimeCard from "../components/AnimeCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchedAnime, setSearchedAnime] = useState("");

  const animes = [
    { id: 1, title: "Hunter x Hunter", release_date: "2011" },
    { id: 2, title: "Naruto", release_date: "2003" },
    { id: 3, title: "Jujutsu Kaisen", release_date: "2020" },
  ];

  function handleSearch() {
    alert(searchedAnime);
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for animes"
          className="search-input"
          value={searchedAnime}
          onChange={(e) => setSearchedAnime(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="animes-grid">
        {animes.map((anime) => (
          <AnimeCard anime={anime} key={anime.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
