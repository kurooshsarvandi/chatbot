import json from 'rollup-plugin-json'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    // `index.js` didn't work because it "mixes named and default exports".
    // input: './index',
    input: './index',
    plugins: [
      json(),
      terser(),
      nodeResolve({
        browser: true
      }),
      commonjs()
    ],
    output: {
      format: 'umd',
      name: 'sqlJsAsSqlite3',
      file: 'bundle/sql.js-as-sqlite3.min.js',
      sourcemap: true
    },
    external: [
      'sql.js'
    ]
  }
]