import { TimeStatus } from '@/constants'

export type ContextState = {
  seconds: number
  status: TimeStatus
  updateStatus: (status: TimeStatus) => void
  startTimer: (initialSeconds: number) => void
}
