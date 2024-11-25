import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'

import { UserAlarm } from '@/components/Alarm/ui/UserAlarm'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Alarm as AlarmType, MAIN_TIME_FORMAT } from '@/constants'
import { alarmsStore } from '@/lib/stotes'

import { CreateAlarm } from './CreateAlarm'

export function Alarm() {
  const [userAlarms, setUserAlarms] = useState<AlarmType[]>(alarmsStore.get() ?? [])

  const handleCreateAlarm = useCallback(
    (alarm: AlarmType) => {
      const isExisting = userAlarms.some((item) => item.time === alarm.time)

      if (isExisting) return

      const newAlarms = [...userAlarms, alarm]

      newAlarms.sort((a, b) => dayjs(a.time, MAIN_TIME_FORMAT).diff(dayjs(b.time, MAIN_TIME_FORMAT)))

      alarmsStore.set(newAlarms)
      setUserAlarms(newAlarms)
    },
    [userAlarms],
  )

  const handleEnableChange = useCallback(
    (alarm: AlarmType, value: boolean) => {
      const index = userAlarms.findIndex((item) => item.time === alarm.time)
      if (index === -1) return

      const updatedAlarms = [...userAlarms]
      updatedAlarms[index] = { ...updatedAlarms[index], enable: value }

      alarmsStore.set(updatedAlarms)
      setUserAlarms(updatedAlarms)
    },
    [userAlarms],
  )

  const handleDelete = useCallback(
    (alarm: AlarmType) => {
      const updatedAlarms = userAlarms.filter((item) => item.time !== alarm.time)

      alarmsStore.set(updatedAlarms)
      setUserAlarms(updatedAlarms)
    },
    [userAlarms],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = dayjs().format(MAIN_TIME_FORMAT)

      userAlarms.forEach((alarm) => {
        if (alarm.enable && alarm.time === currentTime) {
          // eslint-disable-next-line no-console
          console.log('Notification -> Alarm', alarm)
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [userAlarms])

  return (
    <div className='flex flex-1 flex-col items-center'>
      <ScrollArea className='w-full'>
        <div className='flex flex-col gap-2'>
          {userAlarms.map((alarm) => (
            <UserAlarm key={alarm.time} alarm={alarm} onEnableChange={handleEnableChange} onDelete={handleDelete} />
          ))}
        </div>
      </ScrollArea>
      <CreateAlarm onCreateAlarm={handleCreateAlarm} />
    </div>
  )
}
