import { useCallback } from 'react'

import { Alarm } from '@/constants'
import { alarmsStore } from '@/lib/stotes'

export function useUpdateAlarm(alarms: Alarm[], setAlarms: (alarms: Alarm[]) => void) {
  return useCallback(
    (alarm: Alarm) => {
      const updatedAlarms = alarms.map((item) => (item.time === alarm.time ? { ...item, ...alarm } : item))

      alarmsStore.set(updatedAlarms)
      setAlarms(updatedAlarms)
    },
    [alarms, setAlarms],
  )
}
