import { Request, Response } from 'express'
import studentService from './studentService'

const createStudent = async (req: Request, res: Response) => {
  try {
    const {student:studentData} = req.body
    const result = await studentService.createStudentIntoDB(studentData)
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
};

const getStudents = async(req:Request, res:Response)=>{
  try{
    const result = await studentService.getStudents()
    res.status(200).json({
      success:true,
      message:"Student data find successfully",
      data:result    
    }) 
  }
  catch(error){
    console.log(error)
  }
}

const getStudentById = async(req:Request, res:Response)=>{
  try{
    const studentId = req.params.id;
    const result = await studentService.getStudentById(studentId);
    res.status(200).json({
      success:true,
      message: `The student which id is ${studentId}, get found`,
      data:result
    })
  }
  catch(error){
    console.log(error)
  }
}




export const StudentController = {
  createStudent,
  getStudents,
  getStudentById
}
