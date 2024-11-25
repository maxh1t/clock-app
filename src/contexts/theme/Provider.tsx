import { PropsWithChildren, useState } from 'react'

import { ThemeContext } from './context'
import { getDefaultTheme, updateTheme } from './lib'
import { ThemeContextState } from './types'

export function Provider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(getDefaultTheme())

  const value: ThemeContextState = {
    theme,
    setTheme: (theme) => {
      setTheme(theme)
      updateTheme(theme)
    },
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
