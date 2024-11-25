import { useEffect, useState } from 'react'

import { TimeZone } from '@/constants'
import { useDebounce } from '@/hooks/useDebounce'
import { allTimeZones } from '@/lib/allTimeZones'

type Args = {
  value: string
}

export function useTimeZoneSearch({ value }: Args): TimeZone[] {
  const debouncedValue = useDebounce({ value })
  const [foundTimeZones, setFoundTimeZones] = useState<TimeZone[]>([])

  useEffect(() => {
    if (!debouncedValue) {
      setFoundTimeZones([])
      return
    }

    const searchQuery = debouncedValue.toLowerCase()

    const results = Object.values(allTimeZones)
      .filter(({ city, continent }) => {
        return city.toLowerCase().includes(searchQuery) || continent.toLowerCase().includes(searchQuery)
      })
      .sort((a, b) => {
        const aCity = a.city.toLowerCase()
        const bCity = b.city.toLowerCase()

        const aCityIndex = findFirstLetterPosition(searchQuery, aCity)
        const bCityIndex = findFirstLetterPosition(searchQuery, bCity)

        if (aCityIndex !== bCityIndex) return aCityIndex - bCityIndex

        const aContinent = a.continent.toLowerCase()
        const bContinent = b.continent.toLowerCase()

        const aContinentIndex = findFirstLetterPosition(searchQuery, aContinent)
        const bContinentIndex = findFirstLetterPosition(searchQuery, bContinent)

        if (aContinentIndex !== bContinentIndex) return aContinentIndex - bContinentIndex

        return aCity.localeCompare(bCity)
      })
      .slice(0, 5)

    setFoundTimeZones(results)
  }, [debouncedValue])

  return foundTimeZones
}

function findFirstLetterPosition(query: string, target: string): number {
  let position = 0

  for (const char of query) {
    const index = target.indexOf(char, position)
    if (index === -1) return Infinity
    position = index + 1
  }

  return position
}
