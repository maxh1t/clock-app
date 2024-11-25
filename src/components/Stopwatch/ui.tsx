import { TimeCounter } from '@/components/TimeCounter'
import { useStopwatchContext } from '@/contexts/stopwatch'

export function Stopwatch() {
  const { seconds, status, updateStatus } = useStopwatchContext()

  return <TimeCounter status={status} seconds={seconds} onUpdateStatus={updateStatus} />
}
