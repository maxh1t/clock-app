import { themeStore } from '@/lib/stotes'

import { Theme } from './constants'

export function getDefaultTheme(): Theme {
  const theme = themeStore.get() || Theme.System

  updateTheme(theme)
  return theme
}

export function updateTheme(theme: Theme) {
  let resolveTheme = theme
  if (theme === Theme.System) {
    resolveTheme = getSystemTheme()
  }

  themeStore.set(theme)
  window.document.documentElement.classList.toggle('dark', resolveTheme === Theme.Dark)
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light
}
