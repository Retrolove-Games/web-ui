/* eslint-disable no-console */
import React from "react";
import { styled } from "@stitches/react";

const Button = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
});

const HelloWorld = () => (
  <h1>
    Hello, World!{" "}
    <Button onClick={() => console.log("Cholibka!")}>Cholibka!</Button>
  </h1>
);

export default HelloWorld;
