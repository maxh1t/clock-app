export const ROUTES = {
  home: '/',
  alarm: '/alarm',
  clock: '/clock',
  stopwatch: '/stopwatch',
  timer: '/timer',
}

export const MAIN_TIME_FORMAT = 'hh:mm:ss a'

export const H12_TIME_FORMAT = 'hh:mm:ss a'
export const H24_TIME_FORMAT = 'HH:mm:ss'

const LOCAL_STORAGE_PREFIX = 'clock'
export const SETTINGS_LOCAL_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}/settings`
export const TIME_ZONES_LOCAL_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}/timezones`
export const ALARMS_LOCAL_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}/alarms`

export enum AmPm {
  Am = 'am',
  Pm = 'pm',
}

export enum TimeStatus {
  New = 'New',
  InProgress = 'InProgress',
  Stopped = 'Stopped',
}
