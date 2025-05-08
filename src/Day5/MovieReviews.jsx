import { useState } from "react";

const StarRating = ({ rating, onChange }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          onClick={() => onChange(star)} //TODO
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ✰
        </span>
      ))}
    </div>
  );
};

// Individual movie component

const Movie = ({ id, title, rating, onRateChange }) => {
  const handleRateChange = (newRating) => {
    onRateChange(id, newRating); //TODO
  };

  return (
    <div>
      <h2>{title}</h2>
      <StarRating rating={rating || 0} onChange={handleRateChange} />
    </div>
  );
};

// List of movies
const MovieList = ({ movies, movieData, onRateChange }) => {
  return (
    <>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movieData[movie.id]?.rating || 0} //TODO
          onRateChange={onRateChange}
        />
      ))}
    </>
  );
};

// Main component
const MovieReviews = () => {
  const initialMovies = [
    {
      id: 1,
      title: "Inception",
    },
    {
      id: 2,
      title: "The Great Gatsby",
    },
  ];

  const [movideData, setMovieData] = useState({});

  const handleRateChange = (id, newRating) => {
    setMovieData((prev) => {
      return {
        ...prev,
        [id]: {
          ...prev[id],
          rating: newRating,
        },
      };
    });
  };

  return (
    <MovieList
      movies={initialMovies}
      movieData={movideData}
      onRateChange={handleRateChange} //TODO
    />
  );
};

export default MovieReviews;
