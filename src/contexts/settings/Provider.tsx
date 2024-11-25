import { PropsWithChildren, useCallback, useMemo, useState } from 'react'

import { Theme } from '@/contexts/settings/constants'
import { settingsStore } from '@/lib/stotes'

import { SettingsContext } from './context'
import { getDefaultSettings, applyTheme } from './lib'
import { ContextState, Settings } from './types'

export function Provider({ children }: PropsWithChildren) {
  const [settings, setSettings] = useState(getDefaultSettings())

  const updateSettings = useCallback(
    (newSettings: Partial<Settings>) => {
      const updatedSettings = { ...settings, ...newSettings }
      settingsStore.set(updatedSettings)
      setSettings(updatedSettings)
    },
    [settings],
  )

  const setTheme = useCallback(
    (theme: Theme) => {
      applyTheme(theme)
      updateSettings({ theme })
    },
    [updateSettings],
  )

  const setH12 = useCallback(
    (h12: boolean) => {
      updateSettings({ h12 })
    },
    [updateSettings],
  )

  const value = useMemo<ContextState>(() => ({ settings, setTheme, setH12 }), [settings, setTheme, setH12])

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}
