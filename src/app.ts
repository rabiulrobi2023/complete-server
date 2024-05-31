import express, { Application } from 'express'
import cors from 'cors'
import { StudentRouter,} from './modules/student/student.route'
import { UserRouter } from './modules/user/user.route'

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/student', StudentRouter);
app.use('/api/v1/user', UserRouter);

export default app;
