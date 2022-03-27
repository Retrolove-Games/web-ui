import React from "react";
import { Icon, ComponentVariants } from "./Icon";
import IconSvg from "./assets/icon-facebook.svg";

export const IconFacebook: React.VoidFunctionComponent<ComponentVariants> = (props) => (
  <Icon {...props}>
    <IconSvg />
  </Icon>
);
