import * as S from "./styles";

interface RatingStarsProps {
  rating: number;
  setRating: (newRating: number) => void;
}

export function RatingStars({ rating, setRating }: Readonly<RatingStarsProps>) {
  return (
    <S.Wrapper>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <S.Star
            key={star}
            color={rating >= star ? "primary10" : "gray10"}
            onClick={() => {
              setRating(star === rating ? 0 : star);
            }}
          >
            ★
          </S.Star>
        );
      })}
    </S.Wrapper>
  );
}
