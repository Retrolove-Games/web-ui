---
to: packages/<%= h.changeCase.paramCase(name) %>/src/index.ts
---
export * from "./<%= name %>";
