process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@antfu',
  rules:
    {
      'no-console': 'off',
      // '@typescript-eslint/restrict-template-expressions': {
      //   "allowAny": true
      // },
      // "@typescript-eslint/no-unsafe-member-access": "warning",
      // "@typescript-eslint/no-unsafe-call": "warning",
    },

}
