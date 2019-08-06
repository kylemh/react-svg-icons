import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import json from 'rollup-plugin-json';
import reactSvg from 'rollup-plugin-react-svg';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { insertIf } from '@innocuous/functions';

const svgoConfig = require('./svgo.config');

const extensions = ['.js', '.jsx'];

// Inspiration for rollup config stems mostly from https://github.com/palmerhq/tsdx
const generateOutputConfig = ({ format, environment }) => ({
  file: `dist/index.${environment}.${format}.js`,
  format,

  // Do not let Rollup call Object.freeze() on namespace import objects
  // (i.e. import * as namespaceImportObject from...) that are accessed dynamically.
  freeze: false,

  // Do not let Rollup add a `__esModule: true` property when generating exports for non-ESM formats.
  esModule: false,

  treeshake: {
    // We assume reading a property of an object never has side-effects.
    // getters and setters on objects WILL be removed.
    //
    // @example
    // const foo = {
    //  get bar() {
    //    console.log('effect');
    //    return 'bar';
    //  }
    // }
    //
    // const result = foo.bar;
    // const illegalAccess = foo.quux.tooDeep;
    //
    // Soooooo... Don't use getters and setters 🙏
    propertyReadSideEffects: false,
  },
  name: '@nike/icons',
  sourcemap: true,
  globals: { react: 'React', 'react-native': 'ReactNative' },
  exports: 'named',
});

export default {
  input: 'src/index.js',
  output: [
    generateOutputConfig({ format: 'cjs', environment: process.env.BUILD }),
    generateOutputConfig({ format: 'esm', environment: process.env.BUILD }),
  ],
  plugins: [
    external(),
    resolve({
      extensions,
      mainFields: ['module', 'main', 'browser'],
    }),
    json(),
    babel(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.BUILD),
    }),
    reactSvg({ svgo: svgoConfig }),
    sourceMaps(),
    ...insertIf(
      process.env.BUILD === 'production',
      terser({
        // https://github.com/terser-js/terser#minify-options
        sourcemap: true,
        output: { comments: false },
        compress: {
          pure_getters: true,
          passes: 10,
        },
        warnings: true,
      }),
    ),
  ],
};
