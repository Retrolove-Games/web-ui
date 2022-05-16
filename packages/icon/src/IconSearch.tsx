import React from "react";
import { Icon, ComponentVariants } from "./Icon";
import IconSvg from "./assets/icon-search.svg";

export const IconSearch: React.VoidFunctionComponent<ComponentVariants> = (props) => (
  <Icon {...props}>
    <IconSvg />
  </Icon>
);
