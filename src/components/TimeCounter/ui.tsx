import { Pause, Play, RotateCcw } from 'lucide-react'
import { useCallback } from 'react'

import { Button } from '@/components/ui/button'
import { TimeStatus } from '@/constants'
import { formatSecondsToTime } from '@/lib/formatSecondsToTime'

type Props = {
  status: TimeStatus
  seconds: number
  onUpdateStatus: (status: TimeStatus) => void
}

export function TimeCounter({ status, seconds, onUpdateStatus }: Props) {
  const handleReset = useCallback(() => onUpdateStatus(TimeStatus.New), [onUpdateStatus])
  const handleStart = useCallback(() => onUpdateStatus(TimeStatus.InProgress), [onUpdateStatus])
  const handlePause = useCallback(() => onUpdateStatus(TimeStatus.Stopped), [onUpdateStatus])

  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <h2 className='text-2xl font-bold md:text-3xl'>{formatSecondsToTime(seconds)}</h2>
      <div className='mt-4 flex gap-2'>
        {(status === TimeStatus.InProgress || status === TimeStatus.Stopped) && (
          <Button size='icon' onClick={handleReset}>
            <RotateCcw />
          </Button>
        )}
        {(status === TimeStatus.New || status === TimeStatus.Stopped) && (
          <Button size='icon' onClick={handleStart}>
            <Play />
          </Button>
        )}
        {status === TimeStatus.InProgress && (
          <Button size='icon' onClick={handlePause}>
            <Pause />
          </Button>
        )}
      </div>
    </div>
  )
}
