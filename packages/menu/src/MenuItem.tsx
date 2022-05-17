import React from "react";
import { VariantProps } from "@stitches/react";
import { MenuItem as Wrapper } from "./styles";

type ComponentVariants = VariantProps<typeof Wrapper>;
type ComponentType = React.FC<ComponentVariants>;

export const MenuItem: ComponentType = ({ children, ...props }) => (
  <Wrapper
    layout={{
      "@initial": "mobile",
      "@xl": "smallDesktop",
      "@xxl": "desktop",
    }}
    {...props}
  >
    {children}
  </Wrapper>
);
