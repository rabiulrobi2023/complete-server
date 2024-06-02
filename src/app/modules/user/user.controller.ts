/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserService } from './user.sevice'
import sendResponse from '../../utilities/sendResponce'
import httpStatus from 'http-status'
import catchAsync from '../../utilities/catchAsync'

const createStudent = catchAsync(async (req, res) => {
  const { password, student } = req.body
  const result = await UserService.createUserAndStudentInDB(password, student)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    messaage: 'Student created successfully',
    data: result,
  })
})

export const UserController = {
  createStudent,
}
