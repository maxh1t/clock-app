import { createContext, useContext } from 'react'

import { TimeStatus } from '@/constants'

import { ContextState } from './types'

export const TimerContext = createContext<ContextState>({
  seconds: 0,
  status: TimeStatus.New,
  updateStatus: () => null,
  startTimer: () => null,
})

export const useTimerContext = () => useContext(TimerContext)
