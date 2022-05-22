import React from "react";
import { VariantProps } from "@stitches/react";
import { SlidingSubMenuWrapper } from "./styles";

type ComponentVariants = VariantProps<typeof SlidingSubMenuWrapper>;
type ComponentProps = {
  isHidden?: boolean;
  level?: number;
};
type ComponentType = React.FC<ComponentVariants & ComponentProps>;

export const SlidingSubMenu: ComponentType = ({ children, isHidden = true, level = 1, ...props }) => (
  <SlidingSubMenuWrapper
    aria-hidden={isHidden}
    data-level={level}
    {...props}
  >
    {children}
  </SlidingSubMenuWrapper>
);
