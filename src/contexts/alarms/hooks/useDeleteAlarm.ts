import { useCallback } from 'react'

import { Alarm } from '@/constants'
import { alarmsStore } from '@/lib/stotes'

export function useDeleteAlarm(alarms: Alarm[], setAlarms: (alarms: Alarm[]) => void) {
  return useCallback(
    (alarm: Alarm) => {
      const updatedAlarms = alarms.filter((item) => item.time !== alarm.time)

      alarmsStore.set(updatedAlarms)
      setAlarms(updatedAlarms)
    },
    [alarms, setAlarms],
  )
}
