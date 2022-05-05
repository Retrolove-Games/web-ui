import React from "react";
import { VariantProps } from "@stitches/react";
import { Wrapper } from "./styles";

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.FC<ComponentVariants>;

export const Toolbox: ComponentType = ({
  spacing = "md",
  children,
  ...props
}) => (
  <Wrapper spacing={spacing} {...props}>
    {children}
  </Wrapper>
);
