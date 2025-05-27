import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@vitest/browser/matchers';

// Clean up after each test
afterEach(() => {
  cleanup();
});
