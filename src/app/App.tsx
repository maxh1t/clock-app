import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { Toaster } from '@/components/ui/toaster'
import { AlarmsProvider } from '@/contexts/alarms'
import { SettingsProvider } from '@/contexts/settings'
import { StopwatchProvider } from '@/contexts/stopwatch'
import { TimerProvider } from '@/contexts/timer'

import { Router } from './Router'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isSameOrBefore)
dayjs.extend(customParseFormat)
dayjs.extend(duration)

export function App() {
  return (
    <SettingsProvider>
      <Toaster>
        <StopwatchProvider>
          <TimerProvider>
            <AlarmsProvider>
              <Router />
            </AlarmsProvider>
          </TimerProvider>
        </StopwatchProvider>
      </Toaster>
    </SettingsProvider>
  )
}
