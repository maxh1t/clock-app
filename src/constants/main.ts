export const ROUTES = {
  home: '/',
  alarm: '/alarm',
  clock: '/clock',
  stopwatch: '/stopwatch',
  timer: '/timer',
}

export const TIME_FORMAT_MAIN = 'hh:mm:ss a'
export const TIME_FORMAT_CLOCK = 'HH:mm:ss'
export const DATE_FORMAT = 'MM/DD/YYYY'

const LOCAL_STORAGE_PREFIX = 'clock'
export const THEME_LOCAL_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}/theme`
export const TIME_ZONES_LOCAL_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}/timezones`
export const ALARMS_LOCAL_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}/alarms`

export enum AmPm {
  Am = 'am',
  Pm = 'pm',
}
