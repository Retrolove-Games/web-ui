/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("button", {
  display: "inline-block",
});

type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
};

export const Button = <T extends ElementType = "button">({
  as,
  children,
  ...props
}: ButtonProps<T> & ComponentPropsWithoutRef<T>) => {
  const component = as || "button";

  return (
    <Wrapper as={component} {...props}>
      {children}
    </Wrapper>
  );
};
