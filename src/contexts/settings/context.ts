import { createContext, useContext } from 'react'

import { Theme } from './constants'
import { ContextState } from './types'

export const SettingsContext = createContext<ContextState>({
  settings: {
    theme: Theme.System,
    h12: true,
  },
  setTheme: () => null,
  setH12: () => null,
})

export const useSettingsContext = () => useContext(SettingsContext)
