/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { VariantProps } from '@stitches/react';

const Wrapper = styled("span", {
  display: "inline-block",

  "& svg": {
    height: "100%",
    width: "auto"
  },

  // SVG colors
  "& .letter": {
    fill: "$dark500",
    transition: "fill .25s ease-out",
  },

  [`.${darkTheme} &`]: {
    "& .letter": {
      fill: "$white1000",
    },
  },

  // Variants
  variants: {
    size: {
      small: {
        height: "40px",
      },
    },
  },
});

export type LogoVariants = VariantProps<typeof Wrapper>;
export type LogoProps = React.FC<LogoVariants>;

// export type LogoPropsWithoutChildren = React.VoidFunctionComponent<>;

export const Logo: LogoProps = ({
  children,
  size = "small",
  ...props
}) => {
  return (
    <Wrapper aria-label="Retrolove Shop" role="img" size={size} {...props}>
      {children}
    </Wrapper>
  );
};
