export const HOUR_12_OPTIONS = Array.from({ length: 12 }, (_, i) => `${i + 1}`.padStart(2, '0'))
export const HOUR_24_OPTIONS = Array.from({ length: 24 }, (_, i) => `${i}`.padStart(2, '0'))
export const MINUTE_SECOND_OPTIONS = Array.from({ length: 60 }, (_, i) => `${i}`.padStart(2, '0'))
