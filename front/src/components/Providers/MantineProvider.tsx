import { MantineProvider } from '@mantine/core';
import { theme } from '@/mantineTheme';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
