import dayjs, { Dayjs } from 'dayjs'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { TIME_FORMAT_MAIN, TimeZone } from '@/constants'

import { getTimeZoneDifference } from '../lib'

type Props = {
  timeZone: TimeZone
  currentDate?: Dayjs
  onTimeZoneClick: (timeZone: TimeZone) => void
}

export function SelectedTimeZone({ timeZone, currentDate, onTimeZoneClick }: Props) {
  const date = useMemo(() => dayjs().tz(timeZone.tz), [timeZone, currentDate])

  const difference = useMemo(() => getTimeZoneDifference(timeZone.tz), [timeZone])

  return (
    <Button className='flex flex-1' variant='outline' onClick={() => onTimeZoneClick(timeZone)}>
      <div className='flex size-full justify-between'>
        <div className='flex flex-col items-start'>
          <span>
            {timeZone.city}, {timeZone.continent}
          </span>
          <span className='text-muted-foreground'>{timeZone.utc} UTC</span>
        </div>
        <div className='flex flex-col items-end justify-between'>
          <span>{date.format(TIME_FORMAT_MAIN)}</span>
          <span className='text-muted-foreground'>{difference}</span>
        </div>
      </div>
    </Button>
  )
}