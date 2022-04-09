import React from "react";
import type { VariantProps } from "@stitches/react";
import { Wrapper } from "./styles";

// eslint-disable-next-line @typescript-eslint/ban-types
type ComponentProps = {};

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.FC<ComponentVariants & ComponentProps>;

export const Label: ComponentType = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);
