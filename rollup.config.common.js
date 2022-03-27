import ts from "rollup-plugin-ts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
// import peerDepsExternal from "rollup-plugin-peer-deps-external";
import svgr from "@svgr/rollup";
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
        // file: packageJson.main,
        dir: "dist",
        format: "esm",
        sourcemap: true,
        preserveModules: true
      },
    ],
    // external: ["@retrolove-games/ui-themes", "react"],
    plugins: [
      // peerDepsExternal(),
      externals(),
      nodeResolve(),
      commonjs(),
      svgr({
        svgoConfig: {
          plugins: [
            {
              name: "prefixIds",
              active: false,
            },
          ],
        },
      }),
      ts(),
      /* postcss({
        plugins: [autoprefixer()],
      }), */
      terser(),
    ],
  };
};
