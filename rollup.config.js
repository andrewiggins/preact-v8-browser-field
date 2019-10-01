import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/index.rollup.js",
    format: "iife"
  },
  plugins: [
    nodeResolve({
      browser: true
    }),
    commonjs({
      namedExports: {
        // preact: ["h", "render"], // Doesn't work for some reason...
        // "node_modules/preact/dist/preact.umd.js": ["h", "render"] // Required to get browser field for preact.umd.js to work
      }
    })
  ]
};
