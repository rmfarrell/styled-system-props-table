import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

console.log(pkg.main)

export default {
    external: ['styled-components', 'react', 'react-proptypes', 'react-dom', 'react-is'],
    input: "src/index.js",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs({
            include: 'node_modules/**'
        })
    ]
};