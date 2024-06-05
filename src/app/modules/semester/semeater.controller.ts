import httpStatus from 'http-status'
import catchAsync from '../../utilities/catchAsync'
import sendResponse from '../../utilities/sendResponce'
import { SemesterServices } from './semester.services'

const createSemester = catchAsync(async (req, res) => {
  const semesterData = req.body
  const result = await SemesterServices.createSemesterIntoDB(semesterData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    messaage: 'Semester Cteate Successfull',
    data: result,
  })
})

export const SemesterContrller = {
  createSemester,
}
