import "./App.css";
import AnimeCard from "./components/AnimeCard";

function App() {
  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ? (
        <AnimeCard anime={{ title: "First Anime", release_date: "2025" }} />
      ) : (
        <AnimeCard anime={{ title: "Second Anime", release_date: "2025" }} />
      )}
    </>
  );
}

export default App;
