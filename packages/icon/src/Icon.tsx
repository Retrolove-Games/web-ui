import React from "react";
import { VariantProps } from "@stitches/react";
import { Wrapper } from "./styles";

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.FC<ComponentVariants>;

export const Icon: ComponentType = ({ children, size = "small", ...props }) => (
  <Wrapper role="presentation" aria-hidden="true" size={size} {...props}>
    {children}
  </Wrapper>
);
