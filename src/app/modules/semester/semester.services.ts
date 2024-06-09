import { semesterNameCodeMapper } from "./semester.const";
import { TSemester } from "./semester.interface";
import { SemesterModel } from "./semester.model";

const createSemesterIntoDB = async (payload: TSemester)=>{





    if (semesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error('Invlid semester code')
    }

    const  result = await SemesterModel.create(payload);
    return result;
}

export const SemesterServices ={
    createSemesterIntoDB,
}