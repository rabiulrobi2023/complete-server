import  express  from 'express';
import { UserController } from './user.controller';
const router = express.Router()

export const createUser = router.post("/create-student", UserController.createStudent)

export const UserRouter = router;