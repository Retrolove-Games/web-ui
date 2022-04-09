import React from "react";
import { Wrapper } from "./styles";

// eslint-disable-next-line @typescript-eslint/ban-types
type ComponentProps = {};

type SubComponents = {
  icon: React.FC;
  badge: React.FC;
};

export type ComponentType = React.FC<ComponentProps>;

export const IconWithBadge: ComponentType & SubComponents = ({
  children,
  ...props
}) => <Wrapper {...props}>{children}</Wrapper>;

IconWithBadge.icon = ({ children }) => <div className="icon">{children}</div>;
IconWithBadge.badge = ({ children }) => <div className="badge">{children}</div>;
