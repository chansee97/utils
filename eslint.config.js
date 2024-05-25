import antfu from '@antfu/eslint-config'

export default antfu(
  {
    regexp: {
      overrides: {
        'prefer-regex-literals': 'off',
        'regexp/no-unused-capturing-group': 'off',
      },
    },
    typescript: {
      overrides: {
        'ts/no-loss-of-precision': 'off',
        'jsdoc/require-returns-description': 'off',
      },
    },
  },
)
