
import express from "express"
import { StudentController } from "./student.controller"


const router = express.Router()

export const createStudent = router.post("/create-student",StudentController.createStudent)
export const getStudents = router.get("/",StudentController.getStudents)
export const getStudentById = router.get("/:id",StudentController.getStudentById)
export const deleteStudentById = router.patch("/delete-student/:id",StudentController.deleteStuedentById)