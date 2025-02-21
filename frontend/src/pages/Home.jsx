import AnimeCard from "../components/AnimeCard";
import { useEffect, useState } from "react";
import "../css/Home.css";
import { getPopularAnimes, searchAnime } from "../services/api";

function Home() {
  const [searchedAnime, setSearchedAnime] = useState("");
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularAnimes = async () => {
      try {
        const popularAnimes = await getPopularAnimes();
        setAnimes(popularAnimes);
      } catch (error) {
        console.log(error);
        setError("Failed to load animes");
      } finally {
        setLoading(false);
      }
    };

    loadPopularAnimes();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchedAnime.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchAnime(searchedAnime);
      setAnimes(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search anime");
    } finally {
      setLoading(false);
    }
  };

  console.log("searched anime: ", searchedAnime);

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

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          {searchedAnime === "" && <h1>Top 10 Animes</h1>}
          <div className="animes-grid">
            {animes.map((anime) => (
              <AnimeCard anime={anime} key={anime.mal_id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
