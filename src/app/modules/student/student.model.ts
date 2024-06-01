
import { Schema, model } from 'mongoose'
import {
  StudentCustomMethod,
  StudentCustomModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TStudentName,
} from './student.interface'


const studentNameSchema = new Schema<TStudentName>({
  
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, 'Minimum 3 Letter'],
  },
  midName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const guardianInfoSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})

const localGuardianSchema = new Schema<TLocalGuardian>({
  localGuardianName: { type: String, required: true },
  localGuardianAddress: { type: String, required: true },
  localGuardianContactNo: { type: String, required: true },
})

//=========================Main Schema===========================

const studentSchema = new Schema<
  TStudent,
  StudentCustomModel,
  StudentCustomMethod
>(
  {
    id: { type: String, required:true, unique: true },
  
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "User"
    },
    name: studentNameSchema,
    gender: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
    },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: `{VALUE} is not supported`,
      },
      required: [true, 'Blood Group is required'],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardianInfo: guardianInfoSchema,
    localGuardian: localGuardianSchema,
    profileImg: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
)

//=====================Meddleware====================
// studentSchema.pre('save', async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds),
//   )
//   next()
// })
// studentSchema.post('save', async function (doc, next) {
//   doc.password = ''
//   next()
// })

studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})
studentSchema.pre('findOne', function (next) {
  this.findOne({ isDeleted: { $ne: true } })
  next()
})

studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.midName} ${this.name.lastName}`
})

//=========================Model===========================
export const StudentModel = model<TStudent, StudentCustomModel>(
  'Student',
  studentSchema,
)
//====Custom Model=====
studentSchema.methods.isStudentExists = async function (id: string) {
  const existingStudent = await StudentModel.findOne({ id })
  return existingStudent
}
