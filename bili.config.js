const vue = require('rollup-plugin-vue')

module.exports = {
  banner: true,
  format: ['es', 'iife-min', 'cjs', 'umd-min'],
  exports: 'named',
  css: true,
  plugins: [
    vue({ css: true })
  ],
  outDir: 'dist'
}
