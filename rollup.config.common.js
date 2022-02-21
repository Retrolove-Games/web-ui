import ts from "rollup-plugin-ts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
// import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import externals from "rollup-plugin-node-externals";
// import postcss from "rollup-plugin-postcss";
// import autoprefixer from "autoprefixer";

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
    // external: ["@retrolove-games/ui-themes", "react"],
    plugins: [
      // peerDepsExternal(),
      externals(),
      nodeResolve(),
      commonjs(),
      ts(),
      /* postcss({
        plugins: [autoprefixer()],
      }), */
      terser(),
    ],
  };
};
