import React from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import LogoDesktop from "./logo-standard.svg";

const Wrapper = styled("span", {
  "& .letter": {
    fill: "$dark500",
    transition: "all .5s ease-out"
  },
  [`.${darkTheme} &`]: {
    "& .letter": {
      fill: "$white1000",
    },
  }
});

// eslint-disable-next-line arrow-body-style
export const Logo = () => {
  return (
    <Wrapper>
      <LogoDesktop />
    </Wrapper>
  );
};
