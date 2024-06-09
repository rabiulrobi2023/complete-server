import { z } from "zod";


//==============z Schema================
const createStudentNameSchema = z.object({
    firstName: z.string().trim().min(3).max(20),
    midName: z.string().trim(),
    lastName: z.string().trim()
});
const createGuardianInfoSchema = z.object({
    fatherName: z.string().trim(),
    fatherOccupation: z.string().trim(),
    fatherContactNo: z.string().trim(),
    motherName: z.string().trim(),
    motherOccupation: z.string().trim(),
    motherContactNo: z.string().trim(),
});

const createLocalGuardianSchema = z.object({
    localGuardianName: z.string().trim(),
    localGuardianAddress: z.string().trim(),
    localGuardianContactNo: z.string().trim()
});

//==================================Main zValidation Schema=================

export const createStudentValidatonSchema = z.object({
    body: z.object({
      password: z.string().max(20).optional(),
      student:z.object({
        name: createStudentNameSchema,
        gender: z.enum(['male', 'female']),
        dateOfBirth: z.string(),
        email: z.string().trim().email(),
        contactNo: z.string().trim(),
        emergencyContactNo: z.string().trim(),
        bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
        presentAddress: z.string().trim(),
        permanentAddress: z.string().trim(),
        guardianInfo: createGuardianInfoSchema,
        localGuardian: createLocalGuardianSchema,
        profileImg: z.string().optional(),
        admissionSemester: z.string()
      })
   
    })
});

export default createStudentValidatonSchema ;