import UIProviders from "@workspace/ui/components/Providers"
import MantineProvider from "./MantineProvider"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <UIProviders>
      <MantineProvider>{children}</MantineProvider>
    </UIProviders>
  )
}
