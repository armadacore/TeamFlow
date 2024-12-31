import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ignores: ['@types/**/*', 'dist/**/*', 'src-tauri/**/*', '__tests/**/*', '*.config.ts', 'tsconfig.json']},
	{files: ["**/*.{ts,tsx}"]},
	{languageOptions: {
		globals: globals.browser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
	}},
	pluginJs.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	pluginReact.configs.flat.recommended,
	prettierRecommended,
	{
		rules: {
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-undefined': 'error',
			'no-unused-vars': 'off',
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'no-nested-ternary': 'error',
			'newline-before-return': 'error',
			'require-await': 'error',

			"react/react-in-jsx-scope": "off",

			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'default',
					leadingUnderscore: 'allowSingleOrDouble',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE']
				},
				{ selector: 'typeLike', format: ['PascalCase'] },
				{
					selector: 'variable',
					types: ['boolean'],
					leadingUnderscore: 'allowSingleOrDouble',
					format: ['PascalCase'],
					prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
				},
				{ selector: 'variable', leadingUnderscore: 'allowSingleOrDouble', format: ['camelCase'] },
				{
					selector: 'variable',
					modifiers: ['const'],
					leadingUnderscore: 'allowSingleOrDouble',
					format: ['camelCase', 'UPPER_CASE'],
				},
				{ selector: 'function', leadingUnderscore: 'allowSingleOrDouble', format: ['camelCase', 'PascalCase'] },
			],
		},
	},
];
