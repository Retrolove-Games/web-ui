import React from "react";
import { VariantProps } from "@stitches/react";
import { SubMenuWrapper } from "./styles";

type ComponentVariants = VariantProps<typeof SubMenuWrapper>;
type ComponentProps = {
  isExpanded?: boolean;
};
type ComponentType = React.FC<ComponentVariants & ComponentProps>;

export const SubMenu: ComponentType = ({
  children,
  isExpanded = true,
  ...props
}) => (
  <SubMenuWrapper aria-expanded={isExpanded} {...props}>
    {children}
  </SubMenuWrapper>
);
