const calcJapaneseYear = (year: number): string => {
  if (year < 1989) {
    const convertedYear = year - 1925
    return `昭和${convertedYear}`
  } else if (year < 2019) {
    const convertedYear = year - 1988
    return `平成${convertedYear}`
  } else {
    const convertedYear = year - 2018
    return `令和${convertedYear}`
  }
}

const getYear = (): string[] => {
  const now: Date = new Date()
  const nowYear: number = now.getFullYear()
  const yearOptions = []
  for (let i = 1949; i < nowYear - 20; i++) {
    yearOptions.push(`${i}年(${calcJapaneseYear(i)})`)
  }
  return yearOptions
}

const getMonth = (): string[] => {
  const monthOptions: string[] = []
  for (let i = 1; i <= 12; i++) {
    monthOptions.push(`${i}`)
  }
  return monthOptions
}

const getDay = (): string[] => {
  const monthOptions: string[] = []
  for (let i = 1; i <= 31; i++) {
    monthOptions.push(`${i}`)
  }
  return monthOptions
}

export const YEAR_OPTIONS: string[] = getYear()
export const MONTH_OPTIONS: string[] = getMonth()
export const DAY_OPTIONS: string[] = getDay()
