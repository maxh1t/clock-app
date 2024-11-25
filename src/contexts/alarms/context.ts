import { createContext, useContext } from 'react'

import { ContextState } from './types'

export const AlarmsContext = createContext<ContextState>({
  alarms: [],
  createAlarm: () => null,
  deleteAlarm: () => null,
  updateAlarm: () => null,
})

export const useAlarmsContext = () => useContext(AlarmsContext)
