import dayjs from 'dayjs'
import { Trash } from 'lucide-react'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Alarm, TIME_FORMAT_MAIN } from '@/constants'

type Props = {
  alarm: Alarm
  onEnableChange?: (alarm: Alarm, value: boolean) => void
  onDelete?: (alarm: Alarm) => void
}

export function UserAlarm({ alarm, onEnableChange, onDelete }: Props) {
  const date = useMemo(() => dayjs(alarm.time, TIME_FORMAT_MAIN), [alarm])

  return (
    <Card className='flex flex-1 items-center justify-between px-4 py-2'>
      <div>{date.format(TIME_FORMAT_MAIN)}</div>

      <div className='flex items-center gap-2'>
        <Switch checked={alarm.enable} onCheckedChange={(value) => onEnableChange?.(alarm, value)} />
        <Button size='icon' variant='destructive' onClick={() => onDelete?.(alarm)}>
          <Trash className='!size-5' />
        </Button>
      </div>
    </Card>
  )
}
