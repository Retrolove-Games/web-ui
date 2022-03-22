import React from "react";
import { Logo, LogoProps } from "./Logo";
import LogoSvg from "./logo-mobile.svg";

export const LogoMobile: React.VoidFunctionComponent<LogoProps> = (props) => (
  <Logo {...props}>
    <LogoSvg />
  </Logo>
);
