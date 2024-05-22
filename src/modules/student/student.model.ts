import { Schema, model } from 'mongoose'
import { Student,} from './student.interface'

const studentNameSchema = new Schema({
    firstName: { 
      type: String, 
      required: true,
      trim:true,
      minlength:[3,"Minimum 3 Letter"],
      
    },
    midName: { type: String, required: true },
    lastName: { type: String, required: true },
  })

  const guardianInfoSchema = new Schema({
    fatherName:{type:String, required:true},
    fatherOccupation:{type:String, required:true},
    fatherContactNo:{type:String, required:true}, 
    motherName:{type:String, required:true},
    motherOccupation:{type:String, required:true},
    motherContactNo:{type:String, required:true} 
  })

  const localGuardianSchema = new Schema ({
    localGuardianName:{type:String, required:true},
    localGuardianAddress:{type:String, required:true},
    localGuardianContactNo:{type:String,required:true}
  })

//=========================Main Schema===========================

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique:true },
  name:studentNameSchema,
  gender: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  email: { 
    type: String, 
    required: [true,"Email is required"], 
    unique:true,
    trim:true
  },
  contactNo:{type:String, required:true},
  emergencyContactNo:{type:String,required:true},
  bloodGroup:{
    type:String,
    enum:{
      values:['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message:`{VALUE} is not supported`
    },
    required:[true,"Blood Group is required"]
  },
  presentAddress:{type:String, required:true},
  permanentAddress:{type:String, required:true},
  guardianInfo: guardianInfoSchema,
  localGuardian:localGuardianSchema,
  profileImg:{type:String},
  isActive:{
    type:String,
    enum:["active","block"],
    default:"active"
  }
})


//=========================Model===========================

export const StudentModel = model<Student>("Student",studentSchema);



