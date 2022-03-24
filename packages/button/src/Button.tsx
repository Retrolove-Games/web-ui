/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { styled } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("button", {
  display: "inline-block",
  fontFamily: "$primary",
  border: "solid 2px White",
  borderRadius: "8px",
  backgroundColor: "transparent",
  padding: "0 10px",

  // Variants
  variants: {
    color: {
      red: {
        borderColor: "$redDefault"
      },
      neonBlue: {
        borderColor: "$neonBlueDefault"
      }
    }
  }
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
  ...props
}: ButtonProps<T> & ComponentPropsWithoutRef<T> & ComponentVariants) => {
  const component = as || "button";

  return (
    <Wrapper as={component} color={color} {...props}>
      <span>{children}</span>
    </Wrapper>
  );
};
