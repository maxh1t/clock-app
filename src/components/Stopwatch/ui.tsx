import { useState } from 'react'

import { TimeCounter, TimeCounterStatus } from '@/components/TimeCounter'

export function Stopwatch() {
  const [status, setStatus] = useState<TimeCounterStatus>(TimeCounterStatus.New)
  const [seconds, setSeconds] = useState(0)

  const handleOneSecond = () => {
    setSeconds((prev) => prev + 1)
  }

  const handleStatusSet = (status: TimeCounterStatus) => {
    setStatus(status)

    if (status === TimeCounterStatus.New) {
      setSeconds(0)
    }
  }

  return <TimeCounter status={status} seconds={seconds} onOneSecond={handleOneSecond} onStatusSet={handleStatusSet} />
}
