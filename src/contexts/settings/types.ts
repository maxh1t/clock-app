import { Theme } from './constants'

export type Settings = {
  theme: Theme
  h12: boolean
}

export type SettingsContextState = {
  settings: Settings
  setTheme: (theme: Theme) => void
  setH12: (h12: boolean) => void
}
