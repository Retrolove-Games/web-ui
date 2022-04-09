import React from "react";
import { Wrapper } from "./styles";

// eslint-disable-next-line @typescript-eslint/ban-types
type ComponentProps = {};

type SubComponents = {
  left: React.FC;
  right: React.FC;
};

export type ComponentType = React.FC<ComponentProps>;

export const LabelGroup: ComponentType & SubComponents = ({
  children,
  ...props
}) => <Wrapper {...props}>{children}</Wrapper>;

LabelGroup.left = ({ children }) => <div className="left">{children}</div>;
LabelGroup.right = ({ children }) => <div className="right">{children}</div>;
