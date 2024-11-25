import dayjs from 'dayjs'
import { useEffect } from 'react'

import { Alarm, H12_TIME_FORMAT, H24_TIME_FORMAT, MAIN_TIME_FORMAT } from '@/constants'
import { useSettingsContext } from '@/contexts/settings'
import { useToast } from '@/hooks/use-toast'

const TIMER_INTERVAL = 1000

export function useAlarmNotifications(alarms: Alarm[]) {
  const { toast } = useToast()
  const { settings } = useSettingsContext()

  useEffect(() => {
    if (alarms.length === 0) return

    const interval = setInterval(() => {
      const currentTime = dayjs().format(MAIN_TIME_FORMAT)

      alarms.forEach((alarm) => {
        if (alarm.enable && alarm.time === currentTime) {
          const alarmTime = dayjs(alarm.time, MAIN_TIME_FORMAT)
          toast({
            title: `Alarm – ${alarmTime.format(settings.h12 ? H12_TIME_FORMAT : H24_TIME_FORMAT)}`,
          })
        }
      })
    }, TIMER_INTERVAL)

    return () => clearInterval(interval)
  }, [alarms, toast, settings])
}
