export const MAX_ALLOWED_FAVORITES = 5;
const LOCAL_STORAGE_KEY = "@search-heros:favorites"


export const getFavoritesIds = (): number[] => {
  return JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]"
  ) as number[];
};

export const setFavoritesIds = (favorites: number[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
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