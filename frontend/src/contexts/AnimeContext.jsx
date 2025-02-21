import { createContext, useState, useContext, useEffect } from "react";

const AnimeContext = createContext();

export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }) => {
  const [favourite, setFavourites] = useState([]);

  return <AnimeContext.Provider>{children}</AnimeContext.Provider>;
};
