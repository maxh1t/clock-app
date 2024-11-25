import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { ThemeProvider } from '@/contexts/theme'

import { Router } from './Router'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isSameOrBefore)
dayjs.extend(customParseFormat)

export function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}
