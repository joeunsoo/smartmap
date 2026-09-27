import { ThemeProvider as NextThemeProvider } from "./NextThemeProvider"
import MantineProvider from "./MantineProvider"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <MantineProvider>
      <NextThemeProvider>{children}</NextThemeProvider>
    </MantineProvider>
  )
}
