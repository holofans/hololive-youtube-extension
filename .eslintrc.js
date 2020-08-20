// https://eslint.org/docs/user-guide/configuring
// File taken from https://github.com/vuejs-templates/webpack/blob/1.3.1/template/.eslintrc.js, thanks.

module.exports = {
  root: true,
   parserOptions: {
     parser: 'babel-eslint'
   },
  "env": {
     browser: true,
     webextensions: true,
  },
  "extends": [
    'plugin:vue/essential',
    "airbnb-base"
  ],
  "rules": {
    "eqeqeq": "error",
    "no-underscore-dangle": "off",
    "max-len": ["error", 120, 2],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 4 }],
    "object-curly-newline": "off",
    "class-methods-use-this": "off",
    "camelcase": "off",
    "linebreak-style": "off",
    "no-console": "off"
  }
}



// {
//   root: true,
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   env: {
//     browser: true,
//     webextensions: true,
//   },
//   extends: [
//     // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
//     // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
//     'plugin:vue/essential',
//     // https://github.com/standard/standard/blob/master/docs/RULES-en.md
//     'standard',
//     // https://prettier.io/docs/en/index.html
//     'plugin:prettier/recommended'
//   ],
//   // required to lint *.vue files
//   plugins: [
//     'vue'
//   ],
//   // add your custom rules here
//   rules: {
//     // allow async-await
//     'generator-star-spacing': 'off',
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
//   }
// }


