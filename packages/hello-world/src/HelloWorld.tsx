import React from "react";
import { styled } from "@stitches/react";
import css from "./HelloWorld.module.scss";

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

const HelloWorld = () => <h1 className={css.helloWorld}>Hello, World! <Button>Cholibka!</Button></h1>;
export default HelloWorld;
