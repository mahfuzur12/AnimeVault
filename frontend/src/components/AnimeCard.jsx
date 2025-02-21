import "../css/AnimeCard.css";
import { UseAnimeContext } from "../contexts/UseAnimeContext";

function AnimeCard({ anime }) {
  const { addToFavourites, removeFromFavourites, isFavourite } =
    UseAnimeContext();

  const favourite = isFavourite(anime.mal_id);

  function handleFavouriteClick(e) {
    e.preventDefault();

    if (favourite) {
      removeFromFavourites(anime.mal_id);
    } else {
      addToFavourites(anime);
    }
  }

  return (
    <div className="anime-card">
      <div className="anime-poster">
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        <div className="anime-overlay">
          <button
            className={`favourite-btn ${favourite ? "active" : ""}`}
            onClick={handleFavouriteClick}
          >
            ❤︎
          </button>
        </div>
      </div>
      <div className="anime-info">
        <h3>{anime.title}</h3>
        <p>{anime.aired.string}</p>
      </div>
    </div>
  );
}

export default AnimeCard;
