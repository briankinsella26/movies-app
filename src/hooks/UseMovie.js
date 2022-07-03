import { useEffect, useState } from "react";
import { getMovie } from "../api/tmdb-api";

const useMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovie(id).then(movie => {
      setMovie(movie);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [movie, setMovie];
}

export default useMovie;