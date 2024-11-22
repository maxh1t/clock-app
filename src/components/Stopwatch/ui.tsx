import { Dayjs } from 'dayjs'
import { useState } from 'react'

import { TimeCounter, TimeCounterStatus } from '@/components/TimeCounter'
import { zeroTime } from '@/lib/zeroTime'

export function Stopwatch() {
  const [status, setStatus] = useState<TimeCounterStatus>(TimeCounterStatus.New)
  const [time, setTime] = useState<Dayjs>(zeroTime)

  const handleOneSecond = () => {
    setTime((prevState) => prevState.add(1, 'seconds'))
  }

  const handleStatusSet = (status: TimeCounterStatus) => {
    setStatus(status)

    if (status === TimeCounterStatus.New) {
      setTime(zeroTime)
    }
  }

  return <TimeCounter status={status} time={time} onOneSecond={handleOneSecond} onStatusSet={handleStatusSet} />
}
