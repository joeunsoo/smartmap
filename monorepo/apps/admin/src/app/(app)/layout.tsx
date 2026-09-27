import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
} from "@mantine/core"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 200, breakpoint: "sm" }}>
      <AppShellHeader></AppShellHeader>
      <AppShellNavbar>123</AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}
