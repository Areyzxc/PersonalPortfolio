'use client';

import { ReactNode, useEffect } from 'react';
import '@/src/lib/i18n';

export function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // i18n is initialized in the lib/i18n module
  }, []);

  return <>{children}</>;
}
