/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import studentService from './studentService'
import JoistudentValidationSchema from './studentValidationSchema'
import sendResponse from '../../utilities/sendResponce'
import httpStatus from 'http-status'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
      success:true,
      messaage: "Student created successfully",
      data: result
    } )
  } catch (err) {
    next(err)
  }
}

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await studentService.getStudents()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success:true,
      messaage: "Student found successfully",
      data: result
    } )
  } catch (err) {
    next()
  }
}

const getStudentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentId = req.params.id
    const result = await studentService.getStudentById(studentId)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success:true,
      messaage: "Student find successfully",
      data: result
    } )
  } catch (err) {
    next(err)
  }
}

const deleteStuedentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentId = req.params.id
    const result = await studentService.deleteStudentById(studentId)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success:true,
      messaage: "Student deleted successfully",
      data: result
    } )
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
