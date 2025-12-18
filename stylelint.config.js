export default {
    extends: 'stylelint-config-standard-scss',
    plugins: ['stylelint-scss'],
    rules: {
        'scss/at-rule-no-unknown': true,
        'scss/dollar-variable-pattern': '^\\$',
        // 'string-quotes': 'single',
    },
};
