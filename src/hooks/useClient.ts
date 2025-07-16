// lib/useClient.ts
import { useEffect, useState } from 'react';

/**
 * useClient
 * Returns true only when the component is mounted on the client.
 * Useful to avoid hydration mismatches with animations, theme, or window APIs.
 */
export function useClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
