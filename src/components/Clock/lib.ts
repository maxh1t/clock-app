import dayjs from 'dayjs'

export function getTimeZoneDifference(targetTimeZone: string): string {
  const currentOffset = dayjs().utcOffset()
  const targetOffset = dayjs().tz(targetTimeZone).utcOffset()

  const differenceInMinutes = targetOffset - currentOffset
  const hours = Math.floor(differenceInMinutes / 60)
  const minutes = Math.abs(differenceInMinutes % 60)

  if (hours === 0 && minutes === 0) {
    return ''
  }

  return `${hours >= 0 ? '+' : ''}${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`
}
