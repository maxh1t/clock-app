import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'

import { TimeStatus } from '@/constants'

import { StopwatchContext } from './context'
import { ContextState } from './types'

const TIMER_INTERVAL = 1000

export function Provider({ children }: PropsWithChildren) {
  const [seconds, setSeconds] = useState(0)
  const [status, setStatus] = useState(TimeStatus.New)

  useEffect(() => {
    if (status !== TimeStatus.InProgress) return

    const intervalId = setInterval(() => setSeconds((prevState) => prevState + 1), TIMER_INTERVAL)

    return () => clearInterval(intervalId)
  }, [status])

  const updateStatus = useCallback((newStatus: TimeStatus) => {
    setStatus(newStatus)
    if (newStatus === TimeStatus.New) {
      setSeconds(0)
    }
  }, [])

  const value = useMemo<ContextState>(() => ({ seconds, status, updateStatus }), [seconds, status, updateStatus])

  return <StopwatchContext.Provider value={value}>{children}</StopwatchContext.Provider>
}
