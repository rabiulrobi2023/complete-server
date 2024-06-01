import express, { Application } from 'express'
import cors from 'cors'
import { StudentRouter } from './app/modules/student/student.route'
import { UserRouter } from './app/modules/user/user.route'
import globalErrorHandler from './app/middlewires/globalErrorHandler'
import notFoundError from './app/middlewires/notFound'

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/student', StudentRouter)
app.use('/api/v1/user', UserRouter)
app.use(globalErrorHandler)
app.use (notFoundError)

export default app
