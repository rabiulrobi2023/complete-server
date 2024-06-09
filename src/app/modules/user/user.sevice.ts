import config from '../../config'
import { SemesterModel } from '../semester/semester.model'
import { TStudent } from '../student/student.interface'
import { StudentModel } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'
import { generateSutdentId } from './user.utilities'

const createUserAndStudentInDB = async (
  password: string,
  sutdentData: TStudent,
) => {
  const userData: Partial<TUser> = {}
  userData.password = password || (config.DEFAULT_PASS as string)
  userData.role = 'student'

  const admissionSemester = await SemesterModel.findById(
    sutdentData.admissionSemester,
  )
  userData.id = await generateSutdentId(admissionSemester);

  const newUser = await User.create(userData)

  if (Object.keys(newUser).length) {
    sutdentData.id = newUser.id
    sutdentData.user = newUser._id
    const newStudent = await StudentModel.create(sutdentData)
    return newStudent
  }
}

export const UserService = {
  createUserAndStudentInDB,
}
