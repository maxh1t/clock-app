import { settingsStore } from '@/lib/stotes'

import { Theme } from './constants'
import { Settings } from './types'

export function getDefaultSettings(): Settings {
  let settings = settingsStore.get()

  if (!settings) {
    settings = {
      theme: Theme.System,
      h12: getDefaultH12(),
    }
  }

  applyTheme(settings.theme)
  return settings
}

export function applyTheme(theme: Theme) {
  let resolveTheme = theme
  if (theme === Theme.System) {
    resolveTheme = getSystemTheme()
  }

  window.document.documentElement.classList.toggle('dark', resolveTheme === Theme.Dark)
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light
}

function getDefaultH12() {
  const format = new Intl.DateTimeFormat(undefined, { hour: 'numeric' })
  const options = format.resolvedOptions()

  return options.hourCycle === 'h12' || options.hourCycle === 'h11'
}
