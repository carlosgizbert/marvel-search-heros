import {
  FAVORITES_STORE_NAME,
  getData,
  Rating,
  RATINGS_STORE_NAME,
  setData,
} from ".";

export const getFavoritesIds = async (): Promise<number[]> => {
  const favorites = await getData<number>(FAVORITES_STORE_NAME);
  return favorites;
};

export const setFavoritesIds = async (favorites: number[]): Promise<void> => {
  await setData<number>(FAVORITES_STORE_NAME, favorites);
};

export const handleFavoritesIds = async (heroId: number): Promise<number[]> => {
  const favorites = await getFavoritesIds();
  console.log({ favorites });
  const updatedFavorites = favorites.includes(heroId)
    ? favorites.filter((id) => id !== heroId)
    : [...favorites, heroId];
  await setFavoritesIds(updatedFavorites);
  return updatedFavorites;
};

export const getRatings = async (): Promise<Rating[]> => {
  const ratings = await getData<Rating>(RATINGS_STORE_NAME);
  return ratings;
};

export const setRatings = async (ratings: Rating[]): Promise<void> => {
  await setData<Rating>(RATINGS_STORE_NAME, ratings);
};

export const handleRating = async (
  heroId: number,
  newRating: number
): Promise<Rating[]> => {
  const ratings = await getRatings();
  const updatedRatings = ratings.filter((rating) => rating.id !== heroId);

  if (newRating > 0) {
    updatedRatings.push({ id: heroId, rating: newRating });
  }

  await setRatings(updatedRatings);
  return updatedRatings;
};
