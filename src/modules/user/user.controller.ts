/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { UserService } from "./user.sevice";

const createStudent = async (req:Request, res:Response,)=>{
   try{
    const {password, student}= req.body;
    const result = await UserService.createUserAndStudentInDB(password,student)
    res.status(200).json({
        success: true,
        message: 'Student Created Successfully',
        data: result,
      })
   }
   catch (error:any) {
    res.status(500).json({
      success:false,
      message: error.message||"Something went worng"
    })
  }
} 

export const UserController = {
    createStudent
}