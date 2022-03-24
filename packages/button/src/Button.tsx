/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { styled } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  fontFamily: "$primary",
  border: "solid 2px White",
  borderRadius: "8px",
  backgroundColor: "transparent",
  padding: "0 10px",
  fontSize: "$desktopSmall",
  lineHeight: "$lh13",
  boxShadow: "none",
  cursor: "pointer",

  // Variants
  variants: {
    color: {
      red: {
        borderColor: "$redDefault",
        color: "$redDefault",
        "&:hover": {
          backgroundColor: "$redDefault",
          color: "$darkDefault",
        }
      },
      neonBlue: {
        borderColor: "$neonBlueDefault",
        color: "$neonBlueDefault",
        "&:hover": {
          backgroundColor: "$neonBlueDefault",
          color: "$darkDefault",
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
  color = "neonBlue",
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
