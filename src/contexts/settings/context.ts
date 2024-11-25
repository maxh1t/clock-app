import { createContext, useContext } from 'react'

import { Theme } from './constants'
import { SettingsContextState } from './types'

export const SettingsContext = createContext<SettingsContextState>({
  settings: {
    theme: Theme.System,
    h12: true,
  },
  setTheme: () => null,
  setH12: () => null,
})

export const useSettingsContext = () => useContext(SettingsContext)
