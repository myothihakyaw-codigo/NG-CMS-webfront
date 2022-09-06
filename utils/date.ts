import { parseISO } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'
import { enUS } from 'date-fns/locale'
import { formatDistanceToNowStrict } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'
export const formatInTimeZone = (date: any, fmt = 'dd MMMM yyyy', tz = 'UTC') => {
  return date ? format(utcToZonedTime(parseISO(date), tz), fmt, { timeZone: tz }) : ''
}

// ✅ Format a date to YYYY-MM-DD (or any other format)
function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0')
}

export function formatDate(date: any) {
  return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-')
}

export const dateFormat = (date: any, fm = 'dd MMMM') => {
  const result = format(date, fm)
  return result
}

export function isToday(date: any) {
  const today = new Date()

  if (format(today, 'yyyy-MM-dd') === date?.split('T')[0]) {
    return 'Today'
  }

  return false
}
export const formatTimeZoneToUTC = (date: any) => {
  return zonedTimeToUtc(date, 'Asia/Singapore')
}
export const format24hoursTime = (time: any) => {
  // 09:00 am
  return `${time?.substring(0, time.length - 3)} ${Number(time?.split(':')[0]) > 11 ? 'pm' : 'am'}`
}

/**
 *
 * @param date
 * @returns
 * @desc
 * after one week it will auto just display the dates
 * so before that one week it will show in either X min, X hr, X day
 *
 */
export function getFormattedDistanceToNow(date: Date | number): string {
  const options = {
    locale: {
      ...enUS,
      formatDistance: (unit: string, count: number) => {
        switch (true) {
          case unit === 'xSeconds':
            return 'just now'
          case unit === 'xMinutes':
            return `${count} min`
          case unit === 'xHours':
            return `${count} hr`
          case unit === 'xDays':
            return count > 7 ? dateFormat(date) : `${count} day`
          case unit === 'xMonths':
            return dateFormat(date)
          case unit === 'xYears':
            return dateFormat(date)
        }
      },
    },
  }

  return formatDistanceToNowStrict(date, options)
}

export const formatDateString = (dateNum: number) => {
  switch (dateNum) {
    case 1:
      return 'Sun'
    case 2:
      return 'Mon'
    case 3:
      return 'Tue'
    case 4:
      return 'Wed'
    case 5:
      return 'Thu'
    case 6:
      return 'Fri'
    case 7:
      return 'Sat'
    case 8:
      return 'PH'
    default:
  }
}
