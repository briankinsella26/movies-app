import React from "react";
import MovieHeader from "../components/headerMovie";
import SampleMovie from "./sampleDataMovie";
import { MemoryRouter } from "react-router";

export default {
  title: "Headers/ MovieHeader",
  component: MovieHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <MovieHeader movie={SampleMovie} />;

Basic.storyName = "Default";
