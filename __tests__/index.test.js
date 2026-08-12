/**
 * Unit tests for the action's entrypoint, src/index.js
 */

// vitest globals (describe, it, expect, vi, beforeEach) are enabled in
// vitest.config.js

// Mock the action's main module (ESM namespaces are read-only, so vi.mock
// instead of vi.spyOn)
vi.mock("../src/main.js", () => ({
  run: vi.fn(),
}));

describe("index", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls run when imported", async () => {
    const { run } = await import("../src/main.js");

    await import("../src/index.js");

    expect(run).toHaveBeenCalled();
  });
});
