import React from "react";
import ActorCard from "../components/actorCard";
import SampleActor from "./sampleDataActor";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";


export default {
  title: "Popular Actors/ActorCard",
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ActorCard
      actor={SampleActor}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleActor, profile_path: undefined };
  return (
    <ActorCard
      actor={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";
