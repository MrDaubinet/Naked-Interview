import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import postcss from "rollup-plugin-postcss";
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from "svelte-preprocess";
import config from 'sapper/config/rollup.js';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning);

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    preserveEntrySignatures: false,
    plugins: [
      // Step 1 -> Inject Node environment variables
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      // Step 2 -> Compile Svelte
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess: sveltePreprocess(),
      }),
      // Step 3 -> Checks for css imports, postprocess and extract them (for referencing)
      // postcss({ extract: "bundle.css" }),
      // Step 4 -> Import external dependancies from node moduels
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      // Step 5 -> Make all require imports ES6 compatible
      commonjs(),
      // If legacy flag
      legacy &&
      // Step 7 -> Make Everything backwacks js compatible	
      babel({
        extensions: ['.js', '.mjs', '.html', '.svelte'],
        babelHelpers: 'runtime',
        exclude: ['node_modules/@babel/**'],
        presets: [
          ['@babel/preset-env', {
            targets: '> 0.25%, not dead'
          }]
        ],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          ['@babel/plugin-transform-runtime', {
            useESModules: true
          }]
        ]
      }),

      !dev && terser({
        module: true
      })
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        generate: 'ssr',
        dev,
        preprocess: sveltePreprocess(),
      }),
      // postcss({ extract: "bundle.css" }),
      resolve({
        dedupe: ['svelte']
      }),
      commonjs()
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules || Object.keys(process.binding('natives'))
    ),

    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ],

    preserveEntrySignatures: false,
    onwarn,
  }
};