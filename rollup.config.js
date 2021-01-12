import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import svg from 'rollup-plugin-svg';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';

const dev = process.env.NODE_ENV !== 'production';

const plugins = [
    replace({
        DEV_MODE: dev,
    }),
    json(),
    svelte({
        dev,
    }),
    svg(),
    postcss({
        inject: true,
        minimize: !dev,
    }),
    resolve({
        browser: true,
        dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    commonjs(),
    !dev && terser(),
];

export default [
    {
        input: 'src/_bundle/carbon.js',
        output: [
            {
                sourcemap: false,
                format: 'iife',
                name: 'index',
                file: '_site/assets/carbon.legacy.js',
            },
            {
                sourcemap: false,
                format: 'es',
                name: 'index',
                file: '_site/assets/carbon.bundle.js',
            },
        ],
        plugins,
        watch: {
            clearScreen: false,
        },
    },
    {
        input: 'src/_bundle/chartProduction.js',
        output: [
            {
                sourcemap: false,
                format: 'iife',
                name: 'index',
                file: '_site/assets/chartProduction.legacy.js',
            },
            {
                sourcemap: false,
                format: 'es',
                name: 'index',
                file: '_site/assets/chartProduction.bundle.js',
            },
        ],
        plugins,
        watch: {
            clearScreen: false,
        },
    },
    {
        input: 'src/_bundle/chartEmissions.js',
        output: [
            {
                sourcemap: false,
                format: 'iife',
                name: 'index',
                file: '_site/assets/chartEmissions.legacy.js',
            },
            {
                sourcemap: false,
                format: 'es',
                name: 'index',
                file: '_site/assets/chartEmissions.bundle.js',
            },
        ],
        plugins,
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
