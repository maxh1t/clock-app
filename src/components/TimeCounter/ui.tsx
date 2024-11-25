import { Dayjs } from 'dayjs'
import { Pause, Play, RotateCcw } from 'lucide-react'
import { useCallback, useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { TIME_FORMAT_CLOCK } from '@/constants'

import { TimeCounterStatus } from './constants'

type Props = {
  status: TimeCounterStatus
  time: Dayjs
  onOneSecond: () => void
  onStatusSet: (status: TimeCounterStatus) => void
}

export function TimeCounter({ status, time, onOneSecond, onStatusSet }: Props) {
  useEffect(() => {
    if (status !== TimeCounterStatus.InProgress) return

    const intervalId = setInterval(onOneSecond, 1000)

    return () => clearInterval(intervalId)
  }, [status, onOneSecond])

  const handleReset = useCallback(() => onStatusSet(TimeCounterStatus.New), [onStatusSet])
  const handleStart = useCallback(() => onStatusSet(TimeCounterStatus.InProgress), [onStatusSet])
  const handlePause = useCallback(() => onStatusSet(TimeCounterStatus.Stopped), [onStatusSet])

  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <h2 className='text-2xl font-bold md:text-3xl'>{time.format(TIME_FORMAT_CLOCK)}</h2>
      <div className='mt-4 flex gap-2'>
        {(status === TimeCounterStatus.InProgress || status === TimeCounterStatus.Stopped) && (
          <Button size='icon' onClick={handleReset}>
            <RotateCcw />
          </Button>
        )}
        {(status === TimeCounterStatus.New || status === TimeCounterStatus.Stopped) && (
          <Button size='icon' onClick={handleStart}>
            <Play />
          </Button>
        )}
        {status === TimeCounterStatus.InProgress && (
          <Button size='icon' onClick={handlePause}>
            <Pause />
          </Button>
        )}
      </div>
    </div>
  )
}
