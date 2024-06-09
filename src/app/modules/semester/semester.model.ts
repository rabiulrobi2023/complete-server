import { Schema, model } from 'mongoose'
import { TSemester,} from './semester.interface'
import { Months, SemesterCode, SemesterName,} from './semester.const'

const semesterModelSchema = new Schema<TSemester>({
  name: {
    type: String,
    enum: SemesterName,
    required: true
  },
  code: {
    type: String,
    enum: SemesterCode,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  startMonth: {
    type: String,
    enum: Months,
    required: true
  },
 endMonth:{
    type: String,
    enum: Months,
    required: true
 }
},{timestamps: true})


semesterModelSchema.pre('save', async function(next){
  const isSemesterExists = await SemesterModel.findOne({
    name: this.name,
    year: this.year
  })

  if(isSemesterExists){
    throw new Error ("Semester Already Exists")
  }
  next()
  
})

export const SemesterModel = model<TSemester>('semester', semesterModelSchema)
