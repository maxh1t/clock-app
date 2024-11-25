import { PropsWithChildren, useState } from 'react'

import { settingsStore } from '@/lib/stotes'

import { SettingsContext } from './context'
import { getDefaultSettings, applyTheme } from './lib'
import { SettingsContextState } from './types'

export function Provider({ children }: PropsWithChildren) {
  const [settings, setSettings] = useState(getDefaultSettings())

  const value: SettingsContextState = {
    settings,
    setTheme: (theme) => {
      const newSettings = { ...settings, theme }
      applyTheme(theme)
      settingsStore.set(newSettings)
      setSettings(newSettings)
    },
    setH12: (h12) => {
      const newSettings = { ...settings, h12 }
      settingsStore.set(newSettings)
      setSettings(newSettings)
    },
  }

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}
