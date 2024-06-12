module.exports = {
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
  },
  overrides: [
    {
      files: ["test/**/*.ts"],
      env: {
        node: true,
        mocha: true,
      }
    }
  ]
}
