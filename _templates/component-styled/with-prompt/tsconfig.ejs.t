---
to: packages/<%= h.changeCase.paramCase(name) %>/tsconfig.json
---
{
  "extends": "../../tsconfig.common.json",
  "include": ["src"]
}
