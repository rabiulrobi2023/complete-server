/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from 'express'
import studentService from './studentService'
import JoistudentValidationSchema from './studentValidationSchema'
import sendResponse from '../../utilities/sendResponce'
import httpStatus from 'http-status'

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err))
  }
}

//Used catchAsync Higher Order Function
const createStudent = catchAsync(async (req, res) => {
  const { student: studentData } = req.body

  const { error, value } = JoistudentValidationSchema.validate(studentData)
  if (error) {
    res.status(500).json({
      success: false,
      message: 'Falil Create Student',
      error: error.details,
    })
  }
  const result = await studentService.createStudentIntoDB(value)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    messaage: 'Student created successfully',
    data: result,
  })
})




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




const getStudentById: RequestHandler = async (req, res, next) => {
  try {
    const studentId = req.params.id
    const result = await studentService.getStudentById(studentId)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      messaage: 'Student find successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}



const deleteStuedentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.id
    const result = await studentService.deleteStudentById(studentId)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      messaage: 'Student deleted successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}


export const StudentController = {
  createStudent,
  getStudents,
  getStudentById,
  deleteStuedentById,
}
