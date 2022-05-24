import React from "react";
import { VariantProps } from "@stitches/react";
import { MenuFooterWrapper } from "./styles";

type ComponentVariants = VariantProps<typeof MenuFooterWrapper>;
type ComponentType = React.FC<ComponentVariants>;

export const MenuFooter: ComponentType = ({ children, ...props }) => (
  <MenuFooterWrapper
    layout={{
      "@initial": "mobile",
      "@xl": "smallDesktop",
      "@xxl": "desktop",
    }}
    {...props}
  >
    {children}
  </MenuFooterWrapper>
);
