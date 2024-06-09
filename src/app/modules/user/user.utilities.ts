import { TSemester } from '../semester/semester.interface'
import { User } from './user.model'

const lastStudentId = async () => {
  const lastStudent = await User.findOne(
    { role: 'student' },
    { id: 1, _id: 0 },
  ).sort({
    createdAt: -1,
  })
  return lastStudent?.id ? lastStudent?.id.substring(6) : undefined
}

export const generateSutdentId = async (payload: TSemester) => {
  const currentId = (await lastStudentId()) || (0).toString()
  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0')
  const fullId = `${payload.year.toString()}${payload.code}${incrementId}`
  return fullId
}
