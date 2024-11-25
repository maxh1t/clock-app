import dayjs from 'dayjs'
import { useCallback } from 'react'

import { Alarm, MAIN_TIME_FORMAT } from '@/constants'
import { alarmsStore } from '@/lib/stotes'

export function useCreateAlarm(alarms: Alarm[], setAlarms: (alarms: Alarm[]) => void) {
  return useCallback(
    (alarm: Alarm) => {
      if (alarms.some((item) => item.time === alarm.time)) return

      const newAlarms = [...alarms, alarm].sort((a, b) =>
        dayjs(a.time, MAIN_TIME_FORMAT).diff(dayjs(b.time, MAIN_TIME_FORMAT)),
      )

      alarmsStore.set(newAlarms)
      setAlarms(newAlarms)
    },
    [alarms, setAlarms],
  )
}
