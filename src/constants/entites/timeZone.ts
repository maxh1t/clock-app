export type TimeZone = {
  tz: string
  city: string
  continent: string
  utc: string
}

export type TimeZones = Record<string, TimeZone>
