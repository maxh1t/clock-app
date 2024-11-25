import { Dispatch, SetStateAction, useEffect } from 'react'

import { TimeStatus } from '@/constants'
import { useToast } from '@/hooks/use-toast'
import { formatSecondsToTime } from '@/lib/formatSecondsToTime'

const TIMER_INTERVAL = 1000

type Args = {
  status: TimeStatus
  seconds: number
  setSeconds: Dispatch<SetStateAction<number>>
  resetTimer: () => void
  startSeconds: number
}

export function useTimerCountdown({ seconds, status, startSeconds, resetTimer, setSeconds }: Args) {
  const { toast } = useToast()

  useEffect(() => {
    if (status !== TimeStatus.InProgress || seconds <= 0) return

    const intervalId = setInterval(() => {
      setSeconds((val) => {
        const newSeconds = val - 1

        if (newSeconds === 0) {
          toast({ title: `Timer Done – ${formatSecondsToTime(startSeconds)}` })
          resetTimer()
        }

        return Math.max(newSeconds, 0)
      })
    }, TIMER_INTERVAL)

    return () => clearInterval(intervalId)
  }, [status, seconds, setSeconds, resetTimer, startSeconds, toast])
}
