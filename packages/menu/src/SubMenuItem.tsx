import React from "react";
import { VariantProps } from "@stitches/react";
import { SubMenuItemWrapper } from "./styles";

type ComponentVariants = VariantProps<typeof SubMenuItemWrapper>;
type ComponentType = React.FC<ComponentVariants>;

export const SubMenuItem: ComponentType = ({ children, ...props }) => (
  <SubMenuItemWrapper
    layout={{
      "@initial": "mobile",
      "@xl": "smallDesktop",
      "@xxl": "desktop",
    }}
    {...props}
  >
    {children}
  </SubMenuItemWrapper>
);
