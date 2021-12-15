import ts from "rollup-plugin-ts";

export default (packageJson) => {
  return {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      ts(),
    ],
  };
};
