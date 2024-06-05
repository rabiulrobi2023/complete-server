import { Router } from 'express'

import { UserRouter } from '../modules/user/user.route'
import { StudentRouter } from '../modules/student/student.route'
import { SemesterRoute } from '../modules/semester/semester.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/student',
    route: StudentRouter,
  },
  {
    path: '/user',
    route: UserRouter,
  },
  {
    path: '/semester',
    route: SemesterRoute,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
