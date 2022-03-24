import React from "react";
import { Logo, ComponentVariants } from "./Logo";
import LogoSvg from "./logo-mobile.svg";

export const LogoMobile: React.VoidFunctionComponent<ComponentVariants> = (
  props
) => (
  <Logo {...props}>
    <LogoSvg />
  </Logo>
);
