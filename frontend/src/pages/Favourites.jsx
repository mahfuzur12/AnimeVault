import "../css/Favourites.css";
import { UseAnimeContext } from "../contexts/UseAnimeContext";
import AnimeCard from "../components/AnimeCard";

function Favourites() {
  const { favourites } = UseAnimeContext();

  console.log(favourites);

  if (favourites.length > 0) {
    return (
      <div className="favourites">
        <h2>Your Favourites</h2>
        <div className="animes-grid">
          {favourites.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favourites-empty">
      <h2>No favourite animes yet</h2>
      <p>Start adding animes to your favourites and they will appear here</p>
    </div>
  );
}

export default Favourites;
