import React from "react";
import { VariantProps } from "@stitches/react";
import { SubMenuFooterWrapper } from "./styles";

type ComponentVariants = VariantProps<typeof SubMenuFooterWrapper>;
type ComponentType = React.FC<ComponentVariants>;

export const SubMenuFooter: ComponentType = ({ children, ...props }) => (
  <SubMenuFooterWrapper
    layout={{
      "@initial": "mobile",
      "@xl": "desktop",
    }}
    {...props}
  >
    {children}
  </SubMenuFooterWrapper>
);
