/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status"

const notFoundError = (req: Request, res: Response, next: NextFunction)=>{
    return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        messase: "API Not Found",
        error:"",
    }  
    )
}
export default notFoundError