import { Alarm } from '@/constants'

export type ContextState = {
  alarms: Alarm[]
  createAlarm: (alarm: Alarm) => void
  deleteAlarm: (alarm: Alarm) => void
  updateAlarm: (alarm: Alarm) => void
}
