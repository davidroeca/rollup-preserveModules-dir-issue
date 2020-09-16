import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: ['node_modules', 'custom_modules'],
      },
    }),
    commonjs(),
  ],
  output: {
    dir: 'dist',
    format: 'es',
    preserveModules: true,
  },
}
