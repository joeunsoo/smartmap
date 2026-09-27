import { ThemeProvider as NextThemeProvider } from './NextThemeProvider';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <NextThemeProvider>{children}</NextThemeProvider>;
}
