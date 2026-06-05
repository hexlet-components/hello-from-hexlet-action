const { defineConfig } = require('vitest/config');

module.exports = defineConfig({
  // @actions/core@3 exposes only the "import" condition in its exports map,
  // so add it to the SSR resolver to satisfy require('@actions/core') in tests.
  resolve: {
    conditions: ['node', 'import', 'require', 'default'],
  },
  ssr: {
    resolve: {
      conditions: ['node', 'import', 'require', 'default'],
    },
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.test.js'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    clearMocks: true,
    // Run local src/ through the module runner so vi.mock intercepts the
    // require('./main') call nested inside src/index.js (CJS).
    server: {
      deps: {
        inline: [/src\//],
      },
    },
    coverage: {
      provider: 'v8',
      reporter: ['json-summary', 'text', 'lcov'],
      include: ['src/**'],
    },
  },
});
