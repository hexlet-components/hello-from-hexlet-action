import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.test.js'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    clearMocks: true,
    coverage: {
      provider: 'v8',
      reporter: ['json-summary', 'text', 'lcov'],
      include: ['src/**'],
    },
  },
});
