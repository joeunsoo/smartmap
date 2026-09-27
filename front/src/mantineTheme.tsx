'use client';

import { createTheme } from '@mantine/core';
import { paletteMantine } from './define';

export const theme = createTheme({
  breakpoints: {
    xs: '36em',
    sm: '52em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },

  fontFamily: 'var(--font-sans)',
  fontSizes: {
    xs: 'calc(0.75rem * var(--mantine-scale))',
    sm: 'calc(0.875rem * var(--mantine-scale))',
    md: 'calc(1rem * var(--mantine-scale))',
    lg: 'calc(1.125rem * var(--mantine-scale))',
    xl: 'calc(1.25rem * var(--mantine-scale))',
  },

  autoContrast: true,
  primaryColor: 'primary',
  primaryShade: { light: 6, dark: 8 },
  colors: {
    ...paletteMantine,
  },

  components: {},
});
