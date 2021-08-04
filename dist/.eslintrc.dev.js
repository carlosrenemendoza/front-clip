"use strict";

var _rules;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["react-app"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": (_rules = {
    "no-console": ["error", {
      "allow": ["warn", "error"]
    }],
    "eqeqeq": ["error", "always"],
    "quotes": ["error", "singlequote"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"]
  }, _defineProperty(_rules, "quotes", ["error", "single"]), _defineProperty(_rules, "semi", ["error", "always"]), _defineProperty(_rules, "no-unused-vars", ["error", {
    "vars": "all",
    "args": "after-used",
    "ignoreRestSiblings": false
  }]), _rules),
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
};