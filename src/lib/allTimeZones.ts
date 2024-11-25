import dayjs from 'dayjs'

import { TimeZones } from '@/constants'

export const allTimeZones = getAllTimeZones()

function getAllTimeZones(): TimeZones {
  const timeZones: TimeZones = {}

  Intl.supportedValuesOf('timeZone').forEach((tz) => {
    const [continent, city] = tz.split('/')
    if (!city) return

    timeZones[tz] = {
      tz,
      continent,
      city: city.replace(/_/g, ' '),
      utc: dayjs.tz(undefined, tz).format('Z'),
    }
  })

  return timeZones
}
