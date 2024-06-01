import express, { Application } from 'express'
import cors from 'cors'
import { StudentRouter } from './app/modules/student/student.route'
import { UserRouter } from './app/modules/user/user.route'
import globalErrorHandler from './app/middlewires/globalErrorHandler'

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/student', StudentRouter)
app.use('/api/v1/user', UserRouter)
app.use(globalErrorHandler)

export default app
