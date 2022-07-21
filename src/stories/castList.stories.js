import React from "react";
import MovieDetails from "../components/movieDetails";
import SampleMovie from "./sampleDataMovie";
import SampleCast from "./sampleDataCast";
import { MemoryRouter } from "react-router";

export default {
  title: "Movie Details Page/MovieDetails",
  component: MovieDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <MovieDetails movie={SampleMovie} cast={SampleCast}/>;

Basic.storyName = "Default";
