import React from "react";
import type { VariantProps } from "@stitches/react";
import { Wrapper } from "./styles";

type ComponentProps = {
  id: string;
  isOn: boolean;
  handleToggle: (event?: React.FormEvent<HTMLInputElement>) => void;
  label?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
};

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.FC<ComponentVariants & ComponentProps>;

export const Switch: ComponentType = ({
  id,
  isOn,
  handleToggle,
  size = "small",
  label,
  leftIcon,
  rightIcon,
  ...props
}) => (
  <Wrapper size={size} {...props}>
    <input
      id={id}
      type="checkbox"
      aria-label={label}
      checked={isOn}
      onChange={handleToggle}
    />
    <div className="switch" aria-hidden="true" role="presentation">
      {leftIcon && <span className="icon">{leftIcon}</span>}
      <span className="switch-marker" />
      {rightIcon && <span className="icon">{rightIcon}</span>}
    </div>
  </Wrapper>
);
