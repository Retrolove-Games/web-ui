import React, { useState } from "react";
import { useUpdateEffect } from "usehooks-ts";
import type { VariantProps } from "@stitches/react";
import { Wrapper } from "./styles";

type ComponentProps = {
  children: number;
  label: string;
  minValue?: number;
};

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.VoidFunctionComponent<
  ComponentVariants & ComponentProps
>;

const clampValue = (value: number, min: number, max: number): string => {
  if (value < min) {
    return `${min}`;
  }

  if (value > max) {
    return `${max}+`;
  }

  return `${value}`;
};

export const Badge: ComponentType = ({
  children,
  size = "small",
  minValue = 0,
  label,
  ...props
}) => {
  const [animate, setAnimate] = useState(false);

  useUpdateEffect(() => {
    setAnimate(true);
  }, [children]);

  return (
    <Wrapper
      className={animate ? "animate" : ""}
      aria-label={label}
      role="group"
      size={size}
      onAnimationEnd={() => setAnimate(false)}
      {...props}
    >
      <span>{clampValue(children, minValue, 9)}</span>
    </Wrapper>
  );
};
