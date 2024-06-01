import { Router } from "express";
import { StudentRouter } from "../modules/student/student.route";
import { UserRouter } from "../modules/user/user.route";
import path from "path";

const router = Router()

const moduleRoutes = [
    {
        path:"/student",
        route: StudentRouter
    },
    {
        path: "/user",
        route: UserRouter
    }
]

moduleRoutes.forEach(route=>router.use(route.path, route.route))


export default router;