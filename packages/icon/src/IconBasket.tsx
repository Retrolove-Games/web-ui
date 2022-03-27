import React from "react";
import { Icon, ComponentVariants } from "./Icon";
import IconSvg from "./assets/icon-basket.svg";

export const IconBasket: React.VoidFunctionComponent<ComponentVariants> = (props) => (
  <Icon {...props}>
    <IconSvg />
  </Icon>
);
