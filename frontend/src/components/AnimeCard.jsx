import "../css/AnimeCard.css";

function AnimeCard({ anime }) {
  function handleFavouriteClick() {
    alert("Clicked!");
  }

  return (
    <div className="anime-card">
      <div className="anime-poster">
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        <div className="anime-overlay">
          <button className="favourite-btn" onClick={handleFavouriteClick}>
            ♡
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
