import express, { Application } from 'express'
import cors from 'cors'
import { createStudent, deleteStudentById, getStudents } from './modules/student/student.route'
const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/student', createStudent)
app.use('/api/v1/student', getStudents)
app.use('/api/v1/student', deleteStudentById)

export default app
