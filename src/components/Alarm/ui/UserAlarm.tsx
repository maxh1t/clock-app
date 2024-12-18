import dayjs from 'dayjs'
import { Trash } from 'lucide-react'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Alarm, H12_TIME_FORMAT, H24_TIME_FORMAT, MAIN_TIME_FORMAT } from '@/constants'
import { useAlarmsContext } from '@/contexts/alarms'
import { useSettingsContext } from '@/contexts/settings'

type Props = {
  alarm: Alarm
}

export function UserAlarm({ alarm }: Props) {
  const { settings } = useSettingsContext()
  const { updateAlarm, deleteAlarm } = useAlarmsContext()

  const date = useMemo(() => dayjs(alarm.time, MAIN_TIME_FORMAT), [alarm])

  return (
    <Card className='flex flex-1 items-center justify-between px-4 py-2'>
      <div>{date.format(settings.h12 ? H12_TIME_FORMAT : H24_TIME_FORMAT)}</div>

      <div className='flex items-center gap-2'>
        <Switch checked={alarm.enable} onCheckedChange={(value) => updateAlarm({ ...alarm, enable: value })} />
        <Button size='icon' variant='destructive' onClick={() => deleteAlarm(alarm)}>
          <Trash className='!size-5' />
        </Button>
      </div>
    </Card>
  )
}
