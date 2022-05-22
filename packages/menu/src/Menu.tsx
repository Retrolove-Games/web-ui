import React from "react";
import { VariantProps } from "@stitches/react";
import { Wrapper } from "./styles";

type ComponentVariants = VariantProps<typeof Wrapper>;
type ComponentProps = {
  level?: number;
};
type ComponentType = React.FC<ComponentVariants & ComponentProps>;

export const Menu: ComponentType = ({ children, level = 0, ...props }) => (
  <Wrapper data-level={level} {...props}>
    {children}
  </Wrapper>
);
