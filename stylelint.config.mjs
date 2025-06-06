export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-standard-scss',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': ['tailwind']
      }
    ],

    // Possible errors
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,

    // General formatting
    'color-hex-length': 'short',
    'value-keyword-case': 'lower',

    // Naming conventions
    'selector-class-pattern': '^[a-z0-9\\-]+$',

    // Disallow !important
    'declaration-no-important': true,

    // Disallow IDs in selectors
    'selector-max-id': 0,

    // Limit nesting depth
    'max-nesting-depth': 3,

    // Limit specificity
    'selector-max-specificity': '0,3,0',

    // Disallow redundant nesting
    'no-descending-specificity': true,

    // Order rules
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'at-rules',
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
      },
      'rules',
    ],
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'display',
      'flex',
      'grid',
      'align-items',
      'justify-content',
      'width',
      'height',
      'padding',
      'margin',
      'font',
      'font-size',
      'font-weight',
      'line-height',
      'color',
      'background',
      'border',
      'box-shadow',
      'transition',
      // add more in desired order
    ],

    // SCSS-specific rules
    'scss/dollar-variable-pattern': '^[_]?[a-z0-9-]+$',
    'scss/percent-placeholder-pattern': '^[_]?[a-z0-9-]+$',
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/no-global-function-names': true,
  },
  ignoreFiles: [
    '**/*.js',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    'node_modules/**',
    'dist/**',
  ],
};
