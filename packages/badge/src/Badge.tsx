import React from "react";
import type { VariantProps } from "@stitches/react";
import { Wrapper } from "./styles";

type ComponentProps = {
  children: number;
  label: string;
};

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.VoidFunctionComponent<
  ComponentVariants & ComponentProps
>;

export const Badge: ComponentType = ({
  children,
  size = "small",
  label,
  ...props
}) => (
  <Wrapper aria-label={label} role="group" size={size} {...props}>
    <span>{children > 9 ? `9+` : children}</span>
  </Wrapper>
);
