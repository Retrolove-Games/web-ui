/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import type { VariantProps } from "@stitches/react";
import { Wrapper, LeftElementWrapper, RightElementWrapper } from "./styles";

export type ComponentVariants = VariantProps<typeof Wrapper>;
type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  shouldFitContainer?: boolean;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};

export const Button = <T extends ElementType = "button">({
  as,
  children,
  color,
  size,
  shouldFitContainer = false,
  leftElement,
  rightElement,
  ...props
}: ButtonProps<T> & ComponentPropsWithoutRef<T> & ComponentVariants) => {
  const component = as || "button";

  return (
    <Wrapper
      as={component}
      type="button"
      color={color}
      size={
        size || {
          "@initial": "small",
          "@md": "medium",
        }
      }
      width={shouldFitContainer ? "full" : "normal"}
      {...props}
    >
      {leftElement && <LeftElementWrapper>{leftElement}</LeftElementWrapper>}
      <span>{children}</span>
      {rightElement && <RightElementWrapper>{leftElement}</RightElementWrapper>}
    </Wrapper>
  );
};
