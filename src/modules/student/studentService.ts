
import { TStudent } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDB = async (studentData: TStudent) => {
  //======Create data using defalut (create) system=======

  // const result = await StudentModel.create(studentData);

  //======Post or create data using  Instant=======
  const student = new StudentModel(studentData);
  // if(await student.isStudentExists(studentData.id)){
  //   throw Error ("Student Already Exist");
  // }
  const result = await student.save();
  return result;
}


const getStudents = async () => {
  const result = await StudentModel.find()
  return result
}

const getStudentById = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}

const deleteStudentById = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, {isDeleted:true});
  return result;
}

export default {
  createStudentIntoDB,
  getStudents,
  getStudentById,
  deleteStudentById
}
