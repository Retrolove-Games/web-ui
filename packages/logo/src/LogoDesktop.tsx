import React from "react";
import { Logo, ComponentVariants } from "./Logo";
import LogoSvg from "./logo-standard.svg";

export const LogoDesktop: React.VoidFunctionComponent<ComponentVariants> = (props) => (
  <Logo {...props}>
    <LogoSvg />
  </Logo>
);
