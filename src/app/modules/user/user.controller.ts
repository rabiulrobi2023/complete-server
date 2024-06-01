/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.sevice";

const createStudent = async (req:Request, res:Response, next: NextFunction)=>{
   try{
    const {password, student}= req.body;
    const result = await UserService.createUserAndStudentInDB(password,student)
    res.status(200).json({
        success: true,
        message: 'Student Created Successfully',
        data: result,
      })
   }
   catch (err) {
    next(err)
  }
} 

export const UserController = {
    createStudent
}