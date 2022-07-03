import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from '../components/cardIcons/playlistAdd'

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Upcoming movies'
      movies={movies}
      action={() => {
        return <AddToPlaylistIcon />
      }}
    />
  );
};
export default UpcomingMoviesPage;