import { createContext, useState, useEffect } from "react";

const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");

    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (anime) => {
    setFavourites((prev) => [...prev, anime]);
  };

  const removeFromFavourites = (animeId) => {
    setFavourites((prev) => prev.filter((anime) => anime.mal_id !== animeId));
  };

  const isFavourite = (animeId) => {
    return favourites.some((anime) => anime.mal_id === animeId);
  };

  const value = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  };

  return (
    <AnimeContext.Provider value={value}>{children}</AnimeContext.Provider>
  );
};

export default AnimeContext;
