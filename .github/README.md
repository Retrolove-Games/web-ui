<img src="logo-retrolove-shop.svg" width="200">


![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)


# web-ui

Monorepo with Retrolove Shop UI components.


## Scripts

* `build` — build all packages (using Lerna).
* `publish` — publish changed packages (using Lerna).
* `lint` — list linting errors.
* `lint:fix` — lint & fix.
* `lint:quiet` — lint & fix silently.
* ~~`tsm` — generate typings for sass modules.~~
* ~~`tsm:watch` — generate typings for sass modules (in watch mode).~~  

## Local development

Adding local packages:

```bash
npm install --save "[local path]/web-ui/packages/hello-world"
```

## Possible problems

* Please remember that `Rollup` by default will try to bundle everything into packages. Add dependencies to `package.json` file of each package or use `externals` option in Rollup config.