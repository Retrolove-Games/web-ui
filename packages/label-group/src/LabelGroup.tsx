import React from "react";
import { Wrapper } from "./styles";

type ComponentProps = {
  left: React.ReactElement;
  right: React.ReactElement;
};

export type ComponentType = React.VoidFunctionComponent<ComponentProps>;

export const LabelGroup: ComponentType = ({ left, right, ...props }) => (
  <Wrapper {...props}>
    <div className="left">{left}</div>
    <div className="right">{right}</div>
  </Wrapper>
);
