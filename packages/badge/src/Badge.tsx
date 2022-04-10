import React, { useState, useEffect } from "react";
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

export const Badge: ComponentType = ({
  children,
  size = "small",
  minValue = 0,
  label,
  ...props
}) => {
  const [animate, setAnimate] = useState(false);
  const [displayValue, setDisplayValue] = useState(String(children));

  useEffect(() => {
    if (children < minValue) {
      setDisplayValue(String(minValue));
    } else if (children > 9) {
      setDisplayValue("9+");
    } else {
      setDisplayValue(String(children));
    }

    setAnimate(true);
  }, [children, minValue]);

  return (
    <Wrapper
      className={animate ? "animate" : ""}
      aria-label={label}
      role="group"
      size={size}
      onAnimationEnd={() => setAnimate(false)}
      {...props}
    >
      <span>{displayValue}</span>
    </Wrapper>
  );
};
