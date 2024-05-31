import { Model, Types } from 'mongoose'

export type TStudentName = {
  firstName: string
  midName: string
  lastName: string
}

export type TGuardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}
export type TLocalGuardian = {
  localGuardianName: string
  localGuardianAddress: string
  localGuardianContactNo: string
}

export type TStudent = {
  id: string

  user: Types.ObjectId
  name: TStudentName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  avator?: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardianInfo: TGuardian
  localGuardian: TLocalGuardian
  profileImg?: string
  isDeleted: boolean
}

export type StudentCustomMethod = {
  isStudentExists(id: string): Promise<TStudent|null>
}

export type StudentCustomModel = Model<
  TStudent,
  Record<string, never>,
  StudentCustomMethod
>
