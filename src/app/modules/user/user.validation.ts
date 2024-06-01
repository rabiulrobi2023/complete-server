import { z } from "zod";

const userValidationSchema = z.object({
   
    password: z.string().max(20,{message:"Password can not be more 20 charcaters"}),
    needsPasswordChange:z.boolean().default(true).optional(),
    
})

export const UserValidation = {
    userValidationSchema
}