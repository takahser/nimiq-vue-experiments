# nimiq vue experiments

Reproduction repo for https://github.com/nimiq-network/core/issues/448

## Bug report

I'd like to use the Nimiq library in the browser. Since the npm package relies on node and therefore cannot be used in the browser, I started off with using the [cdn](https://cdn.nimiq.com/nimiq.js), by including the url into the html index file of my vue app.
While it works, this solution is not sufficient, for a variety of reasons.

My next logical step was to save the cdn file locally and import it into my typescript files.

#### Expected behavior

Cdn can be saved locally and imported in a typescript powered web app.

#### Actual behavior

The typescript compiler throws an error, when running the nimiq code:

```
Module parse failed: Identifier '_interopRequireDefault' has already been declared (2361:9)
You may need an appropriate loader to handle this file type.
|     _createClass3 = _interopRequireDefault(_createClass2);
|
> function _interopRequireDefault(e) {
|   return e && e.__esModule ? e : {
|     default: e

 @ ./src/main.ts 6:0-36 14:12-17
 @ multi (webpack)-dev-server/client?http://192.168.0.17:8080/sockjs-node (webpack)/hot/dev-server.js ./src/main.ts
```

#### Steps to reproduce

- clone the reproduction repo
- run `yarn install && yarn serve`

#### Troubleshooting

- If either of the two declaration of the `_interopRequireDefault` function **that are not anonymous** are removed (i.e. [L2268][0] or [L2377][1]), the code will execute. This resolves the original "Identifier '_interopRequireDefault' has already been declared" error.
- TypeScript offers [various ways][2] to import a module.
  - single export from a module: `import { Bar } from "./Foo";`
  - entire module as single variable: `import * as foo from "./foo";`
  - importing default exports: `import bar from "./foo" // imports foo's default export and makes it locally available as 'bar'`
- I tried all possible imports for Nimiq, results:

| import type                      | code                             | `Nimiq` value                                                   | works                        |
|----------------------------------|----------------------------------|-----------------------------------------------------------------|------------------------------|
| single export from a module      | `import { Nimiq } from './nimiq'`  | `undefined`                                                       | No                           |
| entire module as single variable | `import * as Nimiq from './nimiq'` | `undefined`                                                       | No                           |
| importing default exports        | `import Nimiq from './nimiq'`      | `Module {__esModule: true, Symbol(Symbol.toStringTag): "Module"}` | Yes, but how to use `Nimiq`? |

- Conclusion: although it's possible to import the `Nimiq` module, it still doesn't seem usable. 


[0]: https://github.com/takahser/nimiq-vue-experiments/blob/master/src/nimiq.js#L2268
[1]: https://github.com/takahser/nimiq-vue-experiments/blob/master/src/nimiq.js#L2377
[2]: https://www.typescriptlang.org/docs/handbook/modules.html#import-a-module-for-side-effects-only
