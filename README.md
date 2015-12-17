# My common webpack config for react projects

## File structure
```
├── index.js
├── src
│   ├── app.js
│   ├── client.js
│   ├── server.js
│   ├── styles
├── static
│   └── build
└── webpack
    ├── loaders.js
    ├── dev.config.js
    ├── prod.config.js
    ├── server.js
    └── transformStats.js
```

## Common dependencies
```json
"dependencies": {
  "autoprefixer-loader": "^3.1.0",
  "babel-core": "^6.3.17",
  "babel-loader": "^6.2.0",
  "babel-preset-es2015": "^6.3.13",
  "babel-preset-react": "^6.3.13",
  "babel-preset-stage-0": "^6.3.13",
  "babel-register": "^6.3.13",
  "body-parser": "^1.14.2",
  "classnames": "^2.2.1",
  "cookie-parser": "^1.4.0",
  "css-loader": "^0.23.0",
  "csurf": "^1.8.3",
  "debug": "^2.2.0",
  "express": "^4.13.3",
  "extract-text-webpack-plugin": "^0.9.1",
  "file-loader": "^0.8.5",
  "immutable": "^3.7.6",
  "json-loader": "^0.5.4",
  "keymirror": "^0.1.1",
  "lodash.debounce": "^3.1.1",
  "lodash.merge": "^3.3.2",
  "node-sass": "^3.4.2",
  "react": "^0.14.3",
  "react-addons-pure-render-mixin": "^0.14.3",
  "react-dom": "^0.14.3",
  "react-hot-loader": "^1.3.0",
  "sass-loader": "^3.1.2",
  "serialize-javascript": "^1.1.2",
  "serve-favicon": "^2.3.0",
  "strip-loader": "^0.1.0",
  "style-loader": "^0.13.0",
  "superagent": "^1.6.1",
  "url-loader": "^0.5.7",
  "webpack": "^1.12.9",
  "webpack-dev-server": "^1.14.0",
  "webpack-error-notification": "^0.1.5",
  "webpack-stats-plugin": "^0.1.1"
},
"devDependencies": {
  "babel-eslint": "^4.1.6",
  "eslint-plugin-react": "^3.11.3",
  "webpack-dev-server": "^1.14.0"
}
```
