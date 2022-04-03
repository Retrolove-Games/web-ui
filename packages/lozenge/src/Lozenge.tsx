import React from "react";
import { styled } from "@retrolove-games/ui-themes";
import { VariantProps } from "@stitches/react";

const Wrapper = styled("span", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  border: "solid 2px $neonBlueDefault",
  borderRadius: "8px",
  padding: "0 10px",
  boxShadow: "none",
  backgroundColor: "transparent",

  fontFamily: "$primary",
  fontSize: "$desktopSmall",
  color: "$neonBlueDefault",
  lineHeight: "$lh13",
  textTransform: "uppercase",
  fontWeight: "$primaryBold",

  // Variants
  variants: {
    color: {
      red: {
        borderColor: "$redDefault",
        color: "$redDefault",
      },

      neonBlue: {
        borderColor: "$neonBlueDefault",
        color: "$neonBlueDefault",
      },
    },
    size: {
      medium: {
        height: "40px",
      },
    },
  },
});

// eslint-disable-next-line @typescript-eslint/ban-types
type ComponentProps = {};

export type ComponentVariants = VariantProps<typeof Wrapper>;
export type ComponentType = React.FC<ComponentVariants & ComponentProps>;

export const Lozenge: ComponentType = ({
  children,
  size = "medium",
  ...props
}) => (
  <Wrapper size={size} {...props}>
    <span>{children}</span>
  </Wrapper>
)
