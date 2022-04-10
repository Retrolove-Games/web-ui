import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import type { VariantProps } from "@stitches/react";
import { Wrapper } from "./styles";

type ComponentProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export type ComponentVariants = VariantProps<typeof Wrapper>;

export const Label = <T extends ElementType = "label">({
  children,
  as,
  ...props
}: ComponentProps<T> & ComponentVariants) => (
  <Wrapper as={as} {...props}>
    {children}
  </Wrapper>
);
