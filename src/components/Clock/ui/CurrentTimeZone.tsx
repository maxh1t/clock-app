import dayjs, { Dayjs } from 'dayjs'

import { TIME_FORMAT_MAIN } from '@/constants'
import { allTimeZones } from '@/lib/allTimeZones'

type Props = {
  date: Dayjs
}
export const DATE_FORMAT = 'ddd, MMM D YYYY'

export function CurrentTimeZone({ date }: Props) {
  const currentTimeZone = allTimeZones[dayjs.tz.guess()]
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl md:text-3xl'>{date.format(TIME_FORMAT_MAIN)}</h2>
      <h3 className='text-lg'>{date.format(DATE_FORMAT)}</h3>
      <p className='text-muted-foreground'>
        {currentTimeZone.city}, {currentTimeZone.continent} | {currentTimeZone.utc} UTC
      </p>
    </div>
  )
}
