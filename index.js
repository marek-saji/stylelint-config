module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
    ],
    rules: {
        indentation: 4,
        'block-opening-brace-newline-before': 'always-multi-line',
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-space-before': 'always-single-line',
        'block-opening-brace-space-after': 'always-single-line',
    },
};
