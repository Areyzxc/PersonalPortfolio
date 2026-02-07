import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const item = typeof window !== 'undefined' ? window.localStorage?.getItem(key) : null;
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      // Silently fail on quota errors (private browsing, storage full, etc)
      if (error instanceof Error && !error.name?.includes('QuotaExceeded')) {
        console.warn(`Warning reading localStorage key "${key}":`, error);
      }
    }
  }, [key]);

  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        if (typeof window !== 'undefined') {
          window.localStorage?.setItem(key, JSON.stringify(value));
        }
      } catch (error) {
        // ✅ Handle quota exceeded errors gracefully
        if (error instanceof Error) {
          if (error.name === 'QuotaExceededError' || error.message?.includes('QuotaExceeded')) {
            // Silently fail - still keep value in memory, just don't persist
            console.debug(`localStorage quota exceeded for key "${key}". Value kept in memory.`);
            return;
          }
        }
        // Log other errors as warnings only
        console.warn(`Warning setting localStorage key "${key}":`, error);
      }
    },
    [key]
  );

  return [storedValue, setValue];
}
