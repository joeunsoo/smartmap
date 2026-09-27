import { MantineProvider } from "@mantine/core"
import { theme } from "@/MantineTheme"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
