interface RatingStarsProps {
  rating: number
  setRating: (star: number) => void
}

export function RatingStars({ rating, setRating }: Readonly<RatingStarsProps>) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (  
          <button
            key={star}
            className='start'
            style={{
              cursor: 'pointer',
              color: rating >= star ? 'gold' : 'gray',
              fontSize: `35px`,
            }}
            onClick={() => {
              setRating(star)
            }}
          >
            {' '}
            ★{' '}
          </button>
        )
      })}
    </div>
  )
}
