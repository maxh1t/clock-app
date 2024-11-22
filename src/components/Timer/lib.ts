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
