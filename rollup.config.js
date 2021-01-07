import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import svg from 'rollup-plugin-svg';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';

const dev = process.env.NODE_ENV !== 'production';
export default [
    {
        input: 'src/_bundle/carbon.js',
        output: [
            {
                sourcemap: false,
                format: 'cjs',
                name: 'index',
                file: '_site/assets/carbon.bundle.legacy.js',
            },
            {
                sourcemap: false,
                format: 'es',
                name: 'index',
                file: '_site/assets/carbon.bundle.js',
            },
        ],
        plugins: [
            replace({
                DEV_MODE: dev,
            }),
            json(),
            svelte({
                dev,
            }),
            svg(),

            resolve({
                browser: true,
                dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/'),
            }),
            commonjs(),
            !dev && terser(),
        ],
        watch: {
            clearScreen: false,
        },
    },
    {
        input: 'src/_bundle/css.js',
        output: [
            {
                file: '.cache/css.js',
            },
        ],
        plugins: [
            replace({
                DEV_MODE: dev,
            }),
            /* Generates a cached file with all CSS,
        /  which will be used later to purge & add only the CSS used
        /  on each individual page. */
            postcss({
                extract: '.cache/main.css',
                // inject: true,
                // minimize: !dev,
            }),
            commonjs(),
            dev && terser(),
        ],
        watch: {
            clearScreen: false,
        },
    },
];
