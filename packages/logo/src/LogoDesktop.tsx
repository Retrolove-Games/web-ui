import React from "react";
import { Logo, LogoVariants } from "./Logo";
import LogoSvg from "./logo-standard.svg";

export const LogoDesktop: React.VoidFunctionComponent<LogoVariants> = (props) => (
  <Logo {...props}>
    <LogoSvg />
  </Logo>
);
