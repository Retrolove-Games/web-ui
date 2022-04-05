import React from "react";
import { VariantProps } from "@stitches/react";
import { Wrapper } from "./styles";

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.FC<ComponentVariants>;

export const Logo: ComponentType = ({ children, size = "small", ...props }) => (
  <Wrapper aria-label="Retrolove Shop" role="img" size={size} {...props}>
    {children}
  </Wrapper>
);
