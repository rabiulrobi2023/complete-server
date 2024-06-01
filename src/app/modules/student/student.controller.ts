/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import studentService from './studentService'
import JoistudentValidationSchema from './studentValidationSchema'

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
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await studentService.getStudents()
    res.status(200).json({
      success: true,
      message: 'Student data find successfully',
      data: result,
    })
  } catch (err) {
    next()
  }
}

const getStudentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentId = req.params.id
    const result = await studentService.getStudentById(studentId)
    res.status(200).json({
      success: true,
      message: `The student which id is ${studentId}, get found`,
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const deleteStuedentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentId = req.params.id
    const result = await studentService.deleteStudentById(studentId)
    res.status(200).json({
      success: true,
      message: 'Student Delete Successfull',
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
