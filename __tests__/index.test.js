/**
 * Unit tests for the action's entrypoint, src/index.js
 */

// vitest globals (describe, it, expect, vi, beforeEach) are enabled in
// vitest.config.js

const main = require('../src/main');

// Mock the action's entrypoint
const runMock = vi.spyOn(main, 'run').mockImplementation(() => {});

describe('index', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls run when imported', async () => {
    require('../src/index');

    expect(runMock).toHaveBeenCalled();
  });
});
