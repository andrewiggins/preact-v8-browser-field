# Preact v8 Browser Field

Uncomment line in rollup.config.js to get rollup to correctly bundle UMD browser field for Preact

However, removing browser field from preact and commenting out line in rollup makes everything work!

Some useful links:

- [NPM Browser doc](https://docs.npmjs.com/files/package.json#browser)
- [Nolan's blog on browser field](https://nolanlawson.com/2017/01/09/how-to-write-a-javascript-package-for-both-node-and-the-browser/)
- [Browserify and UMD](https://dontkry.com/posts/code/browserify-and-the-universal-module-definition.html)
- [node-browser-resolve](https://github.com/defunctzombie/node-browser-resolve)
- [package-browser-field-spec](https://github.com/defunctzombie/package-browser-field-spec)
