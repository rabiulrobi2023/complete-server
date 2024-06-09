import { TMonths, TSemersterName, TSemesterCode, TSemesterNameCodeMapper } from "./semester.interface"

export const Months:TMonths[]= [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
 ]

export const SemesterName: TSemersterName[] = ['Autumn', 'Summar', 'Fall']
export const SemesterCode: TSemesterCode [] = ['01', '02', '03']
export const semesterNameCodeMapper: TSemesterNameCodeMapper = {
    Autumn: "01",
    Summar: "02",
    Fall: "03"
}
