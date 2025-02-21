const BASE_URL = "https://api.jikan.moe/v4";

export const getPopularAnimes = async () => {
  const response = await fetch(
    `${BASE_URL}/top/anime?limit=10&order_by=score&sort=desc`
  );
  const result = await response.json();
  return result.data;
};

export const searchAnime = async (query) => {
  const response = await fetch(
    `${BASE_URL}/anime?q=${encodeURIComponent(query)}`
  );
  const result = await response.json();
  return result.data;
};
