module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        curly: ['error', 'all'],
        indent: 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-else-return': ['error', { allowElseIf: true }],
        'no-plusplus': 'off',
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-use-before-define': ['error', { functions: false }],
        'react/jsx-curly-newline': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'off',
        'react/no-unescaped-entities': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/prop-types': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
    },
    ignorePatterns: ['/config', '/build', '/scripts'],
};
