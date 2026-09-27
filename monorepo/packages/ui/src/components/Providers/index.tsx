import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import "mantine-map/styles.css"
import MantineMap from "./MantineMap"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <MantineMap />
    </>
  )
}
