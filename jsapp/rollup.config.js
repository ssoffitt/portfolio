
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default {
    input: './main.js',
    output: {
        file: './dist/app.js',
        format: 'iife',
        name: 'app',
        exports: 'none',
        watch: {
            exclude: 'node_modules/**'
        },
    },
    plugins: [
        css({ output: './dist/app.css' }),
        (process.env.node_env === 'prod' && terser()),
        resolve({
            browser: true,  // default: false
            jsnext: true,
            preferBuiltins: true,
            // customresolveoptions: {
            //     moduledirectory: 'node_modules'
            // }
        }
        ),
        commonjs({
            // non-commonjs modules will be ignored, but you can also
            // specifically include/exclude files
            include: ["./index.js", "node_modules/**"], // default: undefined
            // if true then uses of `global` won't be dealt with by this plugin
            ignoreglobal: false, // default: false
            // if false then skip sourcemap generation for commonjs modules
            sourcemap: false // default: true
        }),
        builtins(),
        globals(),
    ]
};