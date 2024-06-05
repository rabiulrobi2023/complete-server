import  express  from 'express';
import { UserController } from './user.controller';
import validatRequest from '../../middlewires/validateRequest';
import createStudentValidatonSchema from '../student/studentValidationSchema';
const router = express.Router()



router.post("/create-student", validatRequest(createStudentValidatonSchema), UserController.createStudent)

export const UserRouter = router;