import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [],
	test: {
		globals: true,
		exclude: ['**/node_modules/**'],
		include: [
			'**/__tests__/*.spec.ts',
			'**/__tests__/*.test.ts',
			'**/__tests__/*.spec.tsx',
			'**/__tests__/*.test.tsx',
		],
		coverage: {
			provider: 'istanbul',
			reporter: ['html', 'json', 'lcov'],
			reportsDirectory: './.tests/coverage',
			exclude: ['.tests/**/*', 'src-tauri/**/*', 'src/main.tsx', 'src/app/index.tsx', '*.config.ts', '**/*/*.spec.ts', '**/*/*.test.ts'],
			reportOnFailure: true,
		},
		reporters: [
			'default',
			'html',
		],
		outputFile: {
			html: './.tests/index.html'
		},
		environment: 'jsdom',
	},
});
