const BASE_URL = "https://api.jikan.moe/v4";

export const getPopularAnimes = async () => {
  const response = await fetch(
    `${BASE_URL}/top/anime?limit=10&order_by=score&sort=desc`
  );
  const result = await response.json();
  return result;
};
