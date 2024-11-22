import { Dayjs } from 'dayjs'
import { useState } from 'react'

import { TimeCounter, TimeCounterStatus } from '@/components/TimeCounter'
import { StartTimer } from '@/components/Timer/ui/StartTimer'
import { TIME_FORMAT_CLOCK } from '@/constants'
import { zeroTime } from '@/lib/zeroTime'

export function Timer() {
  const [status, setStatus] = useState<TimeCounterStatus>(TimeCounterStatus.New)
  const [time, setTime] = useState<Dayjs>(zeroTime)
  const [startTime, setStartTime] = useState<Dayjs | null>(null)

  const handleResetTime = () => {
    setTime(zeroTime)
    setStartTime(null)
  }

  const handleOneSecond = () => {
    if (time.isSameOrBefore(zeroTime)) return

    const newTime = time.subtract(1, 'seconds')
    setTime(newTime)

    if (newTime.isSame(zeroTime) && startTime !== null) {
      // eslint-disable-next-line no-console
      console.log('Notification -> Timer', startTime?.format(TIME_FORMAT_CLOCK))

      setStatus(TimeCounterStatus.New)
      handleResetTime()
    }
  }

  const handleSetStatus = (status: TimeCounterStatus) => {
    setStatus(status)

    if (status === TimeCounterStatus.New) {
      handleResetTime()
    }
  }

  const handleStartTimer = (time: Dayjs) => {
    setStartTime(time)
    setTime(time)
    setStatus(TimeCounterStatus.InProgress)
  }

  return (
    <>
      {status === TimeCounterStatus.New ? (
        <StartTimer onStart={handleStartTimer} />
      ) : (
        <TimeCounter status={status} time={time} onOneSecond={handleOneSecond} onStatusSet={handleSetStatus} />
      )}
    </>
  )
}
