/* eslint-disable no-console */
import React from "react";
import { styled } from "@retrolove-games/ui-themes";

const Button = styled("button", {
  backgroundColor: "$primary",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
});

export const HelloWorld: React.FC<{test: string}> = ({test = "dupa"}) => (
  <h1>
    Hello, World! {test}
    <Button onClick={() => console.log("Cholibka!")}>Cholibka!</Button>
  </h1>
);

export default HelloWorld;
