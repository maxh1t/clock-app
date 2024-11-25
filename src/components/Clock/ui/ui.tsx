import dayjs, { Dayjs } from 'dayjs'
import { useCallback, useEffect, useState } from 'react'

import { SelectedTimeZone } from '@/components/Clock/ui/SelectedTimeZone'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TimeZone } from '@/constants'
import { allTimeZones } from '@/lib/allTimeZones'
import { timeZonesStore } from '@/lib/stotes'

import { AllTimeZones } from './AllTimeZones'
import { CurrentTimeZone } from './CurrentTimeZone'

export function Clock() {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs().tz())
  const [selectedTimeZoneIds, setSelectedTimeZoneIds] = useState<string[]>(timeZonesStore.get() ?? [])

  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(dayjs().tz()), 1000)

    return () => clearInterval(interval)
  }, [])

  const handleAllTimeZoneClick = useCallback(
    (timeZone: TimeZone) => {
      const id = timeZone.tz
      const index = selectedTimeZoneIds.indexOf(id)

      if (index > -1) {
        selectedTimeZoneIds.splice(index, 1)
      } else {
        selectedTimeZoneIds.push(id)
      }

      timeZonesStore.set(selectedTimeZoneIds)
      setSelectedTimeZoneIds(selectedTimeZoneIds)
    },
    [selectedTimeZoneIds],
  )

  const handleSelectedTimeZoneClick = useCallback(
    (timeZone: TimeZone) => {
      const index = selectedTimeZoneIds.indexOf(timeZone.tz)
      if (index > -1) {
        selectedTimeZoneIds.splice(index, 1)
      }

      timeZonesStore.set(selectedTimeZoneIds)
      setSelectedTimeZoneIds(selectedTimeZoneIds)
    },
    [selectedTimeZoneIds],
  )

  return (
    <div className='relative flex flex-1 flex-col items-center justify-center gap-2'>
      <div className='flex flex-1 items-center justify-center'>
        <CurrentTimeZone date={currentDate} />
      </div>
      {selectedTimeZoneIds.length > 0 && (
        <ScrollArea className='flex w-full flex-[2] flex-col'>
          <div className='flex flex-col gap-2'>
            {selectedTimeZoneIds.map(
              (id) =>
                !!allTimeZones[id] && (
                  <SelectedTimeZone
                    key={id}
                    timeZone={allTimeZones[id]}
                    currentDate={currentDate}
                    onTimeZoneClick={handleSelectedTimeZoneClick}
                  />
                ),
            )}
          </div>
        </ScrollArea>
      )}
      <AllTimeZones selectedTimeZoneIds={selectedTimeZoneIds} onTimeZoneClick={handleAllTimeZoneClick} />
    </div>
  )
}
