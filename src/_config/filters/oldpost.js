import { DateTime } from 'luxon'

const ZONE = 'America/Chicago' // US Central Time with DST

const nth = (d) => {
  if (d > 3 && d < 21) return 'th'
  switch (d % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}

const dateForFeed = (date) => date.toISOString()

const isOldPost = (date) => {
  const d = DateTime.fromISO(date.toISOString()).setZone(ZONE)
  const now = DateTime.now().setZone(ZONE)
  return now.diff(d, 'years').years > 2
}

const diffInYears = (date) => {
  const d = DateTime.fromISO(date.toISOString()).setZone(ZONE)
  const now = DateTime.now().setZone(ZONE)
  return Math.floor(now.diff(d, 'years').years)
}

// US default: MM/dd/yyyy
const toDateTime = (date) =>
  DateTime.fromISO(date.toISOString()).setZone(ZONE).toFormat('MM/dd/yyyy h:mm:ss a')

const toDateTimeNoSeconds = (date) =>
  DateTime.fromISO(date.toISOString()).setZone(ZONE).toFormat('MM/dd/yyyy h:mm a')

const isoDateOnlyForDiscussion = (date) =>
  DateTime.fromISO(date.toISOString()).setZone(ZONE).toFormat('MM/dd/yyyy')

const isoDateOnly = (date) =>
  DateTime.fromISO(date).setZone(ZONE).toFormat('MM/dd/yyyy')

// Leaving wording as-is; change if you want US month-first prose
const postDate = (date) => {
  const d = DateTime.fromISO(date.toISOString()).setZone(ZONE)
  return `${d.toFormat('MMMM d')}${nth(d.day)}, ${d.toFormat('yyyy')}`
}

const postTime = (date) =>
  DateTime.fromISO(date.toISOString()).setZone(ZONE).toFormat('h:mm a') // switch to 'h:mm a' for US-style time

const postDateNoYear = (date) => {
  const d = DateTime.fromISO(date.toISOString()).setZone(ZONE)
  return `${d.toFormat('MMMM d')}${nth(d.day)}`
}

export default {
  dateForFeed,
  isOldPost,
  diffInYears,
  toDateTime,
  toDateTimeNoSeconds,
  isoDateOnlyForDiscussion,
  isoDateOnly,
  postDate,
  postTime,
  postDateNoYear,
}