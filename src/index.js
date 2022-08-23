import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularActorsPage from './pages/popularActorsPage';
import ActorDetailsPage from './pages/actorDetailsPage';
import AuthProvider from "./contexts/authContext";
import LoginPage from "./pages/loginPage"
import FantasyMoviePage from "./pages/fantasyMoviePage"
import ProtectedRoute from "./protectedRoute"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/actors/:id" element={<ActorDetailsPage/>} />
              <Route path="/actors/popular" element={<PopularActorsPage/>}/>
              <Route path="/movies/favourites" element={<ProtectedRoute><FavouriteMoviesPage/></ProtectedRoute>}/>
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>}/>
              <Route path="/movies/:id" element={<MoviePage/>} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/reviews/:id" element={<MovieReviewPage/>} />
              <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/fantasymovie" element={<ProtectedRoute><FantasyMoviePage/></ProtectedRoute>} />
            </Routes>
          </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));