"use client"

import { theme as baseTheme } from "@workspace/ui/MantineTheme"
import { AppShell, createTheme } from "@mantine/core"

export const theme = createTheme({
  // 기존 테마의 설정을 먼저 펼쳐서 그대로 가져옵니다.
  ...baseTheme,

  components: {
    AppShell: AppShell.extend({
      defaultProps: {
        withBorder: false,
      },
    }),
  },
})
