import { TimeCounter } from '@/components/TimeCounter'
import { StartTimer } from '@/components/Timer/ui/StartTimer'
import { TimeStatus } from '@/constants'
import { useTimerContext } from '@/contexts/timer'

export function Timer() {
  const { seconds, status, updateStatus } = useTimerContext()

  return (
    <>
      {status === TimeStatus.New ? (
        <StartTimer />
      ) : (
        <TimeCounter status={status} seconds={seconds} onUpdateStatus={updateStatus} />
      )}
    </>
  )
}
