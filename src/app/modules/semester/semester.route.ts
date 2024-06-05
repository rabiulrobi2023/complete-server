
import validatRequest from "../../middlewires/validateRequest";
import { SemesterVlaidation } from "./semester.validation";
import { SemesterContrller } from "./semeater.controller";
import  express  from "express";


const router = express.Router()
router.post('/create-semester', validatRequest(SemesterVlaidation.createSemesterValidationSchema),SemesterContrller.createSemester)
export const  SemesterRoute = router;