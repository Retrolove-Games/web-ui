import React from "react";
import { Icon, ComponentVariants } from "./Icon";
import IconSvg from "./assets/icon-burger.svg";

export const IconBurger: React.VoidFunctionComponent<ComponentVariants> = (props) => (
  <Icon {...props}>
    <IconSvg />
  </Icon>
);
