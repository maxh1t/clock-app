export function formatInputStringToTime(value: string): string {
  return `${value[0] + value[1]}:${value[2] + value[3]}:${value[4] + value[5]}`
}

export function handleInputString(button: string, value: string): string {
  if (value[0] !== '0' && button !== 'delete') {
    return value
  }

  if (button === 'delete') {
    return value.slice(0, -1).padStart(6, '0')
  }

  if (button === '00') {
    const toAppend = value[1] !== '0' ? '0' : '00'
    return (value + toAppend).slice(-6)
  }

  if (button.match(/^\d+$/)) {
    return (value + button).slice(-6)
  }

  return value
}

export function convertInputStringToSeconds(value: string): number {
  if (value.length !== 6) return 0

  const hours = parseInt(value.slice(0, 2), 10)
  const minutes = parseInt(value.slice(2, 4), 10)
  const seconds = parseInt(value.slice(4, 6), 10)

  return hours * 3600 + minutes * 60 + seconds
}
