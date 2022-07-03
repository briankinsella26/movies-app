import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToPlaylistIcon from '../components/cardIcons/playlistAdd'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getUpcomingMovies } from '../api/tmdb-api'

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

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