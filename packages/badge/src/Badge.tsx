import React, { useState, useEffect } from "react";
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
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <span>{children > 9 ? `9+` : children}</span>
    </Wrapper>
  );
};
