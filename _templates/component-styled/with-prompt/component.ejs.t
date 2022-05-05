---
to: packages/<%= h.changeCase.paramCase(name) %>/src/<%= name %>.tsx
---
import React from "react";
import { VariantProps } from "@stitches/react";
import { Wrapper } from "./styles";

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.FC<ComponentVariants>;

export const <%= name %>: ComponentType = ({ children, ...props }) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
);
