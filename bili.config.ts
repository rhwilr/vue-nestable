import { Config } from 'bili'

const config: Config = {
  banner: true,
  plugins: {
    vue: true
  },
  input: {
    index: 'src/index.js',
  },
  output: {
    dir: 'dist',
    extractCSS: true,
    format: ['es', 'iife-min', 'cjs', 'cjs-min', 'umd-min'],
    moduleName: 'vueNestable',
  }
}

export default config
