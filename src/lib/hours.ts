export function isOpenNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Bucharest',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date)
  const weekday = parts.find((part) => part.type === 'weekday')?.value
  const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? 0)
  const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? 0)
  const current = hour * 60 + minute
  if (weekday === 'Sun') return false
  if (weekday === 'Sat') return current >= 10 * 60 && current < 14 * 60
  return current >= 9 * 60 && current < 17 * 60
}
