
export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type TSemersterName = 'Autumn' | 'Summar' | 'Fall'
export type TSemesterCode = '01' | '02' | '03'

export type TSemester = {
  name: TSemersterName
  code: TSemesterCode
  year: number
  startMonth: TMonths
  endMonth: TMonths
}
