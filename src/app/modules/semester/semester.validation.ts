import { z } from 'zod'
import { Months, SemesterName } from './semester.const'

const createSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...SemesterName] as [string]),
    code: z.enum(['01', '02', '03']),
    year: z.number(),
    startMonth: z.enum([...Months] as [string]),
    endMonth: z.enum([...Months] as [string]),
  }),
})

export const SemesterVlaidation = {
  createSemesterValidationSchema,
}
