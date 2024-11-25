import { useState } from 'react'

import { TimeCounter, TimeCounterStatus } from '@/components/TimeCounter'
import { StartTimer } from '@/components/Timer/ui/StartTimer'
import { formatSecondsToTime } from '@/lib/formatSecondsToTime'

export function Timer() {
  const [status, setStatus] = useState<TimeCounterStatus>(TimeCounterStatus.New)
  const [seconds, setSeconds] = useState(0)
  const [startSeconds, setStartSeconds] = useState<number | null>(null)

  const handleResetTime = () => {
    setSeconds(0)
    setStartSeconds(null)
  }

  const handleOneSecond = () => {
    if (seconds === 0) return

    const newSeconds = seconds - 1
    setSeconds(newSeconds)

    if (newSeconds === 0 && startSeconds !== null) {
      // eslint-disable-next-line no-console
      console.log('Notification -> Timer', formatSecondsToTime(startSeconds))

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

  const handleStartTimer = (time: number) => {
    setStartSeconds(time)
    setSeconds(time)
    setStatus(TimeCounterStatus.InProgress)
  }

  return (
    <>
      {status === TimeCounterStatus.New ? (
        <StartTimer onStart={handleStartTimer} />
      ) : (
        <TimeCounter status={status} seconds={seconds} onOneSecond={handleOneSecond} onStatusSet={handleSetStatus} />
      )}
    </>
  )
}
