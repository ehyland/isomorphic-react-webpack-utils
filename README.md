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

## npm scripts
```json
"scripts": {
  "dev": "DEBUG=app:* NODE_ENV=development node index",
  "build": "webpack --config ./webpack/prod.config.js",
  "start": "NODE_ENV=production node index"
}
```

## .babelrc
```json
{
  "presets": [
    "es2015",
    "react",
    "stage-0"
  ]
}
```

## .eslintrc
```json
{
  "parser": "babel-eslint",
  "plugins": ["react"],
  "extends": "eslint:recommended",
  "rules": {
    "arrow-spacing": 2,
    "curly": 2,
    "eol-last": 2,
    "indent": [2, 2],
    "no-lonely-if": 2,
    "no-spaced-func": 2,
    "no-unused-vars": 0,
    "no-var": 2,
    "prefer-const": 2,
    "quotes": [2, "double"],
    "jsx-quotes": [1, "prefer-double"],
    "space-before-blocks": 2,

    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/no-danger": 2,
    "react/no-unknown-property": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2
  },

  "env": {
    "node": true,
    "browser": true
  }
}

```

## peer dependencies
mkdirp  
webpack  
webpack-dev-server  
webpack-error-notification  
extract-text-webpack-plugin  
node-sass  
babel-core  
strip-loader  
react-hot-loader  
babel-loader  
style-loader  
css-loader  
autoprefixer-loader  
sass-loader  
url-loader  
file-loader  
