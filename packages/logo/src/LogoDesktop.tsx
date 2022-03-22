import React from "react";
import { Logo, LogoProps } from "./Logo";
import LogoSvg from "./logo-standard.svg";

export const LogoDesktop: React.VoidFunctionComponent<LogoProps> = (props) => (
  <Logo {...props}>
    <LogoSvg />
  </Logo>
);
