import React from "react";
import { VariantProps } from "@stitches/react";
import { Wrapper } from "./styles";

type ComponentVariants = VariantProps<typeof Wrapper>;
type ComponentType = React.FC<ComponentVariants>;

export const Menu: ComponentType = ({ children, ...props }) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
);
