import { PropsWithChildren, useMemo, useState } from 'react'

import { Alarm } from '@/constants'
import { alarmsStore } from '@/lib/stotes'

import { AlarmsContext } from './context'
import { useAlarmNotifications, useCreateAlarm, useDeleteAlarm, useUpdateAlarm } from './hooks'
import { ContextState } from './types'

export function Provider({ children }: PropsWithChildren) {
  const [alarms, setAlarms] = useState<Alarm[]>(alarmsStore.get() || [])

  useAlarmNotifications(alarms)
  const createAlarm = useCreateAlarm(alarms, setAlarms)
  const deleteAlarm = useDeleteAlarm(alarms, setAlarms)
  const updateAlarm = useUpdateAlarm(alarms, setAlarms)

  const value = useMemo<ContextState>(
    () => ({ alarms, createAlarm, deleteAlarm, updateAlarm }),
    [alarms, createAlarm, deleteAlarm, updateAlarm],
  )

  return <AlarmsContext.Provider value={value}>{children}</AlarmsContext.Provider>
}
