/* eslint-disable @typescript-eslint/no-explicit-any */
import studentService from './studentService'
import sendResponse from '../../utilities/sendResponce'
import httpStatus from 'http-status'
import catchAsync from '../../utilities/catchAsync'


//Used catchAsync Higher Order Function
// const createStudent = catchAsync(async (req, res) => {
//   const { student: studentData } = req.body

//   const { error, value } = createStudentValidatonSchema.parseAsync(studentData)
//   if (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Falil Create Student',
//       error: error.details,
//     })
//   }
//   const result = await studentService.createStudentIntoDB(value)
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     messaage: 'Student created successfully',
//     data: result,
//   })
// })

//Used catchAsync Higher Order Function
const getStudents = catchAsync(async (req, res) => {
  const result = await studentService.getStudents()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    messaage: 'Student found successfully',
    data: result,
  })
})

const getStudentById = catchAsync(async (req, res) => {
  const studentId = req.params.id
  const result = await studentService.getStudentById(studentId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    messaage: 'Student find successfully',
    data: result,
  })
})

const deleteStuedentById = catchAsync(
  async (req,res) => {

      const studentId = req.params.id
      const result = await studentService.deleteStudentById(studentId)
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        messaage: 'Student deleted successfully',
        data: result,
      })
  } 
)


export const StudentController = {
  getStudents,
  getStudentById,
  deleteStuedentById,
}
