/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.sevice";
import sendResponse from "../../utilities/sendResponce";
import httpStatus from "http-status";

const createStudent = async (req:Request, res:Response, next: NextFunction)=>{
   try{
    const {password, student}= req.body;
    const result = await UserService.createUserAndStudentInDB(password,student)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success:true,
      messaage: "Student created successfully",
      data: result
    } )
   }
   catch (err) {
    next(err)
  }
} 

export const UserController = {
    createStudent
}