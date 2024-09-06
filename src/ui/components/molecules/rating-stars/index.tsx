import * as S from './styles';

interface RatingStarsProps {
	id: string;
	rating: number;
	setRating: (newRating: number) => void;
}

export function RatingStars({
	id,
	rating,
	setRating,
}: Readonly<RatingStarsProps>) {
	return (
		<S.Wrapper id={id}>
			{[1, 2, 3, 4, 5].map((star) => {
				return (
					<S.Star
						id={`rating-stars-star-${star}`}
						key={star}
						color={rating >= star ? 'primary10' : 'gray10'}
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
