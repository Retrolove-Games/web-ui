import React from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import LogoDesktop from "./logo-standard.svg";

const Wrapper = styled("span", {
  "& .letter": {
    fill: "$dark500",
  },
  [`.${darkTheme} &`]: {
    "& .letter": {
      fill: "$white100",
    },
  }
});

export const Logo = () => {
  const a = 1;

  return (
    <Wrapper>
      <LogoDesktop />
    </Wrapper>
  );
};
