import config from '../../config'
import { TStudent } from '../student/student.interface'
import { StudentModel } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'

const createUserAndStudentInDB = async (
  password: string,
  sutdentData: TStudent,
) => {
  console.log(sutdentData)
  const userData: Partial<TUser> = {}
  userData.password = password || (config.DEFAULT_PASS as string)
  userData.role = 'student'
  userData.id = '2030100023'

  const newUser = await User.create(userData)

  if (Object.keys(newUser).length) {
    sutdentData.id = newUser.id
    sutdentData.user = newUser._id
    sutdentData.password = newUser.password
    const newStudent = await StudentModel.create(sutdentData)
    return newStudent
  }
}

export const UserService = {
  createUserAndStudentInDB,
}
