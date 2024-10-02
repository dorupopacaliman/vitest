import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { useLocalStorage } from './useLocalStorage';

afterEach(() => {
  localStorage.clear();
});

describe('useLocalStorage', () => {
  const TEST_KEY = 'testKey';
  const TEST_INITIAL_VALUE = 'initialValue';
  
  const renderLocalStorageHook = <T>(key: string, initialValue: T) => {
    return renderHook(({ initialValue, key }) => useLocalStorage(key, initialValue), {
      initialProps: { initialValue, key },
    });
  };

  it('initial value is stored in localStorage', () => {
    const { result } = renderLocalStorageHook(TEST_KEY, TEST_INITIAL_VALUE);

    expect(result.current[0]).toBe(TEST_INITIAL_VALUE);
    expect(localStorage.getItem(TEST_KEY)).toBe(JSON.stringify(TEST_INITIAL_VALUE));
  });

  it('localStorage key value is updated whenever the setValue is called', () => {
    const { result } = renderLocalStorageHook(TEST_KEY, TEST_INITIAL_VALUE);

    const NEW_VALUE = 'newValue';
    
    act(() => result.current[1](NEW_VALUE));
    expect(result.current[0]).toBe(NEW_VALUE);
    expect(localStorage.getItem(TEST_KEY)).toBe(JSON.stringify(NEW_VALUE));
  });

  it('localStorage is cleared whenever setValue is called with undefined', () => {
    const { result } = renderLocalStorageHook(TEST_KEY, TEST_INITIAL_VALUE);

    expect(localStorage.getItem(TEST_KEY)).toBe(JSON.stringify(TEST_INITIAL_VALUE));

    act(() => result.current[1](undefined));
    expect(result.current[0]).toBeUndefined();
    expect(localStorage.getItem(TEST_KEY)).toBeNull();
  });

  it('uses value from localStorage if it exists', () => {
    const EXISTING_VALUE = 'existingValue';
    localStorage.setItem(TEST_KEY, JSON.stringify(EXISTING_VALUE));

    const { result } = renderLocalStorageHook(TEST_KEY, TEST_INITIAL_VALUE);

    expect(result.current[0]).toBe(EXISTING_VALUE);
  });
});
