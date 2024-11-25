import { Alarm, THEME_LOCAL_STORAGE_KEY, TIME_ZONES_LOCAL_STORAGE_KEY, ALARMS_LOCAL_STORAGE_KEY } from '@/constants'
import { Theme } from '@/contexts/theme'

export const themeStore = createLocalStore<Theme>({ key: THEME_LOCAL_STORAGE_KEY })
export const timeZonesStore = createLocalStore<string[]>({ key: TIME_ZONES_LOCAL_STORAGE_KEY, json: true })
export const alarmsStore = createLocalStore<Alarm[]>({ key: ALARMS_LOCAL_STORAGE_KEY, json: true })

type Result<T> = {
  get: () => T | null
  set: (value: T) => void
  clear: () => void
}

type Args = {
  key: string
  json?: boolean
}

function createLocalStore<T>({ key, json }: Args): Result<T> {
  return {
    get: () => {
      const item = localStorage.getItem(key)
      if (item === null) return null
      return json ? (JSON.parse(item) as T) : (item as T)
    },
    set: (value: T) => {
      const serialized = json ? JSON.stringify(value) : (value as string)
      localStorage.setItem(key, serialized)
    },
    clear: () => localStorage.removeItem(key),
  }
}
