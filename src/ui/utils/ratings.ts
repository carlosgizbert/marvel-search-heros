interface Rating {
  id: number;
  rating: number;
}

const LOCAL_STORAGE_KEY = "@search-heros:ratings";

export const getRatings = (): Rating[] => {
  return JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]"
  ) as Rating[];
};

export const setRatings = (ratings: Rating[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ratings));
};

export const handleRatings = (
  ratings: Rating[],
  newRating: Rating
): Rating[] => {
  const ratingExists = ratings.some(({ id }) => id === newRating.id);

  if (ratingExists) {
    return ratings.map((rating) =>
      rating.id === newRating.id ? newRating : rating
    );
  } else {
    return [...ratings, newRating];
  }
};
