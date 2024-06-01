import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewires/globalErrorHandler'
import notFoundError from './app/middlewires/notFound'
import router from './app/routes'

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/', router)
app.use(globalErrorHandler)
app.use (notFoundError)

export default app
