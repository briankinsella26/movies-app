import React from "react";
import Header from "../components/header";
import { MemoryRouter } from "react-router";

export default {
  title: "Headers/ Header",
  component: Header,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <Header title={'sample title'} />;

Basic.storyName = "Default";
