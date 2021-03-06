import React from "react";
import { VariantProps } from "@stitches/react";
import { MenuItemWrapper} from "./styles";

type ComponentVariants = VariantProps<typeof MenuItemWrapper>;
type ComponentType = React.FC<ComponentVariants>;

export const MenuItem: ComponentType = ({ children, ...props }) => (
  <MenuItemWrapper
    layout={{
      "@initial": "mobile",
      "@xl": "smallDesktop",
      "@xxl": "desktop",
    }}
    {...props}
  >
    {children}
  </MenuItemWrapper>
);
