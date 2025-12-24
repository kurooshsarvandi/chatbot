# `sql.js-as-sqlite3`

A wrapper around [`sql.js`](https://www.npmjs.com/package/sql.js) to make it look like [`sqlite3`](https://www.npmjs.com/package/sqlite3).

Based on [this code by @domasx2](https://github.com/sql-js/sql.js/issues/91#issuecomment-169655900).

[Demo](https://catamphetamine.gitlab.io/sql.js-as-sqlite3/)

## Install

```js
npm install sql.js sql.js-as-sqlite3 --save
```

If you're not using a bundler then use a [standalone version from a CDN](#browser-no-bundler).

## Use

### Node.js

```js
import sqlJsAsSqlite3 from 'sql.js-as-sqlite3'

console.log(sqlJsAsSqlite3)
```

### Browser (with bundler)

```js
import sqlJsAsSqlite3 from 'sql.js-as-sqlite3'
import initSqlJs from 'sql.js'

sqlJsAsSqlite3.configure({
  // `sql.js` package default export.
  initSqlJs,
  // Base URL for `sql.js` to get the `*.wasm` files like `sql-wasm-debug.wasm`.
  // The version of the `*.wasm` files must match the version of the `sql.js` package.
  // Must end with a "/".
  wasmFileBaseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/'
})

console.log(sqlJsAsSqlite3)
```

### Browser (no bundler)

One can use any npm CDN service, e.g. [unpkg.com](https://unpkg.com) or [jsdelivr.net](https://jsdelivr.net)

```html
<script src="https://unpkg.com/sql.js-as-sqlite3@0.2.x/bundle/sql.js-as-sqlite3.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/sql-wasm.min.js"></script>
<script>
  // Base URL for `sql.js` to get the `*.wasm` files like `sql-wasm-debug.wasm`.
  // The version of the `*.wasm` files must match the version of `sql.js`.
  // Must end with a "/".
  SQL_JS_WASM_FILE_BASE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/'
</script>

<script>
  console.log(sqlJsAsSqlite3)
</script>
```

## Sequelize

This package could be used to make [`sequelize`](https://www.npmjs.com/package/sequelize) work with `sqlite` database:

```js
import Sequelize from 'sequelize'
import sqlJsAsSqlite3 from 'sql.js-as-sqlite3'

const sequelize = new Sequelize('sqlite://:memory:', {
  dialectModule: sqlJsAsSqlite3
})
```

See a [test](https://gitlab.com/catamphetamine/sql.js-as-sqlite3/-/blob/main/test/sequelize.test.js) for a server-side example.

For a client-side example, see [`sequelize-browser`](https://www.npmjs.com/package/sequelize-browser) package.

<!--
See `./test/sequelize.js`.
-->

## TypeScript

This library comes with TypeScript "typings". If you happen to find any bugs in those, create an issue.

## GitHub

On March 9th, 2020, GitHub, Inc. silently [banned](https://medium.com/@catamphetamine/how-github-blocked-me-and-all-my-libraries-c32c61f061d3) my account (erasing all my repos, issues and comments, even in my employer's private repos) without any notice or explanation. Because of that, all source codes had to be promptly moved to GitLab. The [GitHub repo](https://github.com/catamphetamine/sql.js-as-sqlite3) is now only used as a backup (you can star the repo there too), and the primary repo is now the [GitLab one](https://gitlab.com/catamphetamine/sql.js-as-sqlite3). Issues can be reported in any repo.

## License

[MIT](LICENSE)

