import { PropsWithChildren, useCallback, useMemo, useState } from 'react'

import { TimeStatus } from '@/constants'

import { TimerContext } from './context'
import { useTimerCountdown } from './hooks'
import { ContextState } from './types'

export function Provider({ children }: PropsWithChildren) {
  const [seconds, setSeconds] = useState(0)
  const [startSeconds, setStartSeconds] = useState(0)
  const [status, setStatus] = useState(TimeStatus.New)

  const resetTimer = useCallback(() => {
    setSeconds(0)
    setStartSeconds(0)
    setStatus(TimeStatus.New)
  }, [])

  const updateStatus = useCallback(
    (newStatus: TimeStatus) => {
      setStatus(newStatus)
      if (newStatus === TimeStatus.New) {
        resetTimer()
      }
    },
    [resetTimer],
  )

  const startTimer = useCallback((initialSeconds: number) => {
    setStartSeconds(initialSeconds)
    setSeconds(initialSeconds)
    setStatus(TimeStatus.InProgress)
  }, [])

  useTimerCountdown({ status, seconds, setSeconds, resetTimer, startSeconds })

  const value = useMemo<ContextState>(
    () => ({ seconds, status, updateStatus, startTimer }),
    [seconds, status, updateStatus, startTimer],
  )

  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
}
