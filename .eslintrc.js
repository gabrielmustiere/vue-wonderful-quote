module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    "indent": ["error", 2, {"SwitchCase": 1}],
    "import/no-unresolved": 0,
    "import/no-unassigned-import": 0,
    "block-spacing": "off",
    "semi": "off",
    "no-multiple-empty-lines": ["error", {"max": 1, "maxBOF": 1}],
    "padding-line-between-statements": [
      "error",
      {blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      {blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}
    ],
    "no-console": "off",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
      }
    ],
    "vue/html-indent" : ["error", {
      "attribute": 1,
      "closeBracket": 1,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/html-self-closing": ["never"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
