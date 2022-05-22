import React from "react";
import { VariantProps } from "@stitches/react";
import { SubMenuLabelWrapper } from "./styles";

type ComponentVariants = VariantProps<typeof SubMenuLabelWrapper>;
type ComponentType = React.FC<ComponentVariants>;

export const SubMenuLabel: ComponentType = ({ children, ...props }) => (
  <SubMenuLabelWrapper
    layout={{
      "@initial": "mobile",
      "@xl": "smallDesktop",
      "@xxl": "desktop",
    }}
    {...props}
  >
    {children}
  </SubMenuLabelWrapper>
);
