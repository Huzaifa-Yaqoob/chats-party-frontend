'use client';

import { MoonIcon, SunIcon } from '@/icons';
import { useTheme } from 'next-themes';

function ToggleTheme() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className={'ml-auto p-4'}>
      {resolvedTheme === 'light' && (
        <MoonIcon onClick={() => setTheme('dark')} className={'cursor-pointer'} />
      )}
      {resolvedTheme === 'dark' && (
        <SunIcon onClick={() => setTheme('light')} className={'cursor-pointer'} />
      )}
    </div>
  );
}

export default ToggleTheme;
