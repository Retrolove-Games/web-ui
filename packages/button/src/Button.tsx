/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  border: "solid 2px $redDefault",
  borderRadius: "8px",
  padding: "0 10px",
  boxShadow: "none",
  backgroundColor: "transparent",

  fontFamily: "$primary",
  fontSize: "$desktopSmall",
  color: "$redDefault",
  lineHeight: "$lh13",

  cursor: "pointer",

  "&:hover, &:focus": {
    backgroundColor: "$redDefault",
    color: "$whiteDefault",
  },

  [`.${darkTheme} &`]: {
    borderColor: "$neonBlueDefault",
    color: "$neonBlueDefault",

    "&:hover, &:focus": {
      backgroundColor: "$neonBlueDefault",
      color: "$darkDefault",
    }
  },

  // Variants
  variants: {
    color: {
      red: {
        [`&, .${darkTheme} &`]: {
          borderColor: "$redDefault",
          color: "$redDefault",

          "&:hover, &:focus": {
            backgroundColor: "$redDefault",
          }
        },
      },

      neonBlue: {
        [`&, .${darkTheme} &`]: {
          borderColor: "$neonBlueDefault",
          color: "$neonBlueDefault",

          "&:hover, &:focus": {
            backgroundColor: "$neonBlueDefault",
          }
        }
      },
    },

    size: {
      medium: {
        height: "40px",
      },
    },
  },
});

export type ComponentVariants = VariantProps<typeof Wrapper>;
type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
};

export const Button = <T extends ElementType = "button">({
  as,
  children,
  color,
  size = "medium",
  ...props
}: ButtonProps<T> & ComponentPropsWithoutRef<T> & ComponentVariants) => {
  const component = as || "button";

  return (
    <Wrapper as={component} type="button" color={color} size={size} {...props}>
      <span>{children}</span>
    </Wrapper>
  );
};
