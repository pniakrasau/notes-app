module.exports = {
    root: true,
    env: {
        browser: true,
        es2023: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:prettier/recommended'
    ],
    plugins: [
        '@nx',
        'react',
        'react-hooks',
        '@typescript-eslint',
        'prettier',
        'simple-import-sort',
        'unused-imports',
        'no-null'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.base.json',
        createDefaultProgram: true,
        warnOnUnsupportedTypeScriptVersion: false,
        tsconfigRootDir: __dirname,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', 'js', 'jsx'],
                paths: ['./src'],
            },
            typescript: {
                project: ['tsconfig.base.json'],
            },
        },
        'import/extensions': ['.ts', '.tsx'],
    },
    rules: {
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
                fixStyle: 'separate-type-imports',
            },
        ],
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: ['variable', 'function'],
                format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
            },
        ],
        'react/require-default-props': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.tsx'],
            },
        ],
        'import/prefer-default-export': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        'no-console': ['error'],
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        // This rule enforces the use of arrow functions for all callbacks
        'prefer-arrow-callback': 'error',
        // This rule enforces the use of the unknown type over the any type
        '@typescript-eslint/no-explicit-any': 'error',
        // This rule disallows default exports
        'import/no-default-export': 'error',
        // This rule enforces the use of the [] syntax for defining array types over Array<>
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        // This rule disallows the use of null values
        'no-null/no-null': 'error',
        // This rule enforces using braces for all control statements
        curly: [2, 'all']
    },
    overrides: [
        {
            files: ['*.ts', '*.js', '*.tsx'],
            rules: {
                '@nx/enforce-module-boundaries': [
                    'error',
                    {
                        enforceBuildableLibDependency: true,
                        allow: [],
                        allowCircularSelfDependency: true,
                        depConstraints: [
                            {
                                sourceTag: '*',
                                onlyDependOnLibsWithTags: ['*'],
                            },
                        ],
                    },
                ],
            },
        },
        {
            files: ['*.ts'],
            extends: ['plugin:@nx/typescript'],
        },
        {
            files: ['*.js'],
            extends: ['plugin:@nx/javascript'],
        },
        {
            files: ['**/test/**/*.spec.{j,t}s?(x)', '*.ts?(x)'],
            rules: {
                'no-undef': 'off',
                'import/first': 'off',
            },
        },
    ],
}
