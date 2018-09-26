import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import json from 'rollup-plugin-json'

export default {
  entry: `src/index.js`,
  dest: `dist/vue-nestable.js`,
  format: 'umd',
  moduleName: 'VueNestable',
  plugins: [
    json(),
    vue({
      css: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      browser: true,
      extensions: ['.vue', '.js', '.json']
    }), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    babel()
  ]
}
