import React, { useState, useLayoutEffect, useRef } from "react";
import { VariantProps } from "@stitches/react";
import { SubMenuWrapper } from "./styles";

type ComponentVariants = VariantProps<typeof SubMenuWrapper>;
type ComponentProps = {
  isExpanded?: boolean;
};
type ComponentType = React.FC<ComponentVariants & ComponentProps>;

export const SubMenu: ComponentType = ({
  children,
  isExpanded = true,
  ...props
}) => {
  const subMenuEl = useRef<HTMLUListElement>(null);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const height = subMenuEl.current?.offsetHeight;
    subMenuEl.current?.style.setProperty("--original-height", `${height}px`);
    setIsReady(true);
  }, []);

  return (
    <SubMenuWrapper
      ref={subMenuEl}
      data-ready={isReady}
      aria-expanded={isExpanded}
      layout={{
        "@initial": "mobile",
        "@xl": "smallDesktop",
      }}
      {...props}
    >
      {children}
    </SubMenuWrapper>
  );
};
