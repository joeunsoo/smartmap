import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShellHeader></AppShellHeader>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}
