import { UserAlarm } from '@/components/Alarm/ui/UserAlarm'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useAlarmsContext } from '@/contexts/alarms'

import { CreateAlarm } from './CreateAlarm'

export function Alarm() {
  const { alarms } = useAlarmsContext()

  return (
    <div className='flex flex-1 flex-col items-center'>
      <ScrollArea className='w-full'>
        <div className='flex flex-col gap-2'>
          {alarms.map((alarm) => (
            <UserAlarm key={alarm.time} alarm={alarm} />
          ))}
        </div>
      </ScrollArea>
      <CreateAlarm />
    </div>
  )
}
