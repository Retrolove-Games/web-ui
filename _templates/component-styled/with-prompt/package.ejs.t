---
to: packages/<%= h.changeCase.paramCase(name) %>/package.json
---
{
  "name": "@retrolove-games/ui-<%= h.changeCase.paramCase(name) %>",
  "version": "0.0.0",
  "description": "",
  "repository": "git://github.com/Retrolove-Games/web-ui.git",
  "main": "dist/index.js",
  "module": "dist/index.js",
  "source": "src/index.ts",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "npm run clean && rollup --config",
    "clean": "rm -rf dist"
  },
  "author": "Konrad Fedorczyk",
  "license": "ISC",
  "gitHead": "0a681b5da407fb7eaac23d7b2ac2f934e90181d4",
  "peerDependencies": {
    "react": "^17.0.2"
  },
  "dependencies": {
    "@retrolove-games/ui-themes": "^0.0.3",
    "@stitches/react": "^1.2.8"
  }
}
