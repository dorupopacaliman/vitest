import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useCount } from './useCount';

describe('useCount', () => {
  it('increments/decrements when the functions are called', async () => {
    const { result } = renderHook(({ initialCount }) => useCount(initialCount), { initialProps: { initialCount: 0 } });

    expect(result.current.count).toBe(0);
    act(() => result.current.increment());

    expect(result.current.count).toBe(1);
    act(() => result.current.decrement());

    expect(result.current.count).toBe(0);
  });
});
