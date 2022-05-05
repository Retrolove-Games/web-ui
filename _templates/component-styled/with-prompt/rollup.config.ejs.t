---
to: packages/<%= h.changeCase.paramCase(name) %>/rollup.config.js
---
import defaultConfig from "../../rollup.config.common";
import packageJson from "./package.json";

export default defaultConfig(packageJson);
