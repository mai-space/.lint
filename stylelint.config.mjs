export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-standard-scss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': [],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
