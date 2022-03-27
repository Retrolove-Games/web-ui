import React from "react";
import { Icon, ComponentVariants } from "./Icon";
import IconSvg from "./assets/icon-twitter.svg";

export const IconTwitter: React.VoidFunctionComponent<ComponentVariants> = (props) => (
  <Icon {...props}>
    <IconSvg />
  </Icon>
);
