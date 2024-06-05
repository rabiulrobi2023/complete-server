import { TSemester } from "./semester.interface";
import { SemesterModel } from "./semester.model";

const createSemesterIntoDB = async (payload: TSemester)=>{
    const  result = await SemesterModel.create(payload);
    return result;
}

export const SemesterServices ={
    createSemesterIntoDB,
}