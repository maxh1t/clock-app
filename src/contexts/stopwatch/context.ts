import { createContext, useContext } from 'react'

import { TimeStatus } from '@/constants'

import { ContextState } from './types'

export const StopwatchContext = createContext<ContextState>({
  seconds: 0,
  status: TimeStatus.New,
  updateStatus: () => null,
})

export const useStopwatchContext = () => useContext(StopwatchContext)
