import React from "react";
import { Wrapper } from "./styles";

type ComponentProps = {
  icon: React.ReactElement;
  badge: React.ReactElement;
};

export type ComponentType = React.VoidFunctionComponent<ComponentProps>;

export const IconWithBadge: ComponentType = ({ icon, badge, ...props }) => (
  <Wrapper {...props}>
    {icon}
    <div className="badge">
      {badge}
    </div>
  </Wrapper>
);
