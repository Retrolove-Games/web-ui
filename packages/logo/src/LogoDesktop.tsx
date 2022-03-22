import React from "react";
import { Logo, LogoProps } from "./Logo";
import LogoSvg from "./logo-standard.svg";

export const LogoDesktop: React.FC<LogoProps> = (props) => (
  <Logo {...props}>
    <LogoSvg />
  </Logo>
);
