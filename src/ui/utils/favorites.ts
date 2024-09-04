export const MAX_ALLOWED_FAVORITES = 5;


export const getFavoritesIds = (): number[] => {
  return JSON.parse(
    localStorage.getItem("@search-heros:favorites") ?? "[]"
  ) as number[];
};

export const setFavoritesIds = (favorites: number[]) => {
  localStorage.setItem("@search-heros:favorites", JSON.stringify(favorites));
};

export const handleFavoritesIds = (
  favorites: number[],
  heroId: number
): number[] => {
  if (favorites.includes(heroId)) {
    return favorites.filter((id) => id !== heroId);
  }
  return [...favorites, heroId];
};