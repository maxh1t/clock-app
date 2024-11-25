import dayjs from 'dayjs'

export function formatSecondsToTime(totalSeconds: number): string {
  const duration = dayjs.duration(totalSeconds, 'seconds')

  const days = Math.floor(duration.asDays())
  const hours = duration.hours()
  const minutes = duration.minutes()
  const seconds = duration.seconds()

  return `${days > 0 ? `${days}d ` : ''}${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
