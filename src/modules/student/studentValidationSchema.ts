import Joi from "joi";

//==============Joi Schema================
const studentNameSchema = Joi.object({
    firstName: Joi.string().trim().min(3).max(20).required().messages({
      'string.min': 'Minimum 3 letters are required for firstName',
      'string.max': 'Maximum 20 letters are allowed for firstName',
      'any.required': 'First name is required'
    }),
    midName: Joi.string().trim().required().messages({
      'any.required': 'Middle name is required'
    }),
    lastName: Joi.string().trim().required().messages({
      'any.required': 'Last name is required'
    })
});

const guardianInfoSchema = Joi.object({
    fatherName: Joi.string().trim().required().messages({
      'any.required': 'Father\'s name is required'
    }),
    fatherOccupation: Joi.string().trim().required().messages({
      'any.required': 'Father\'s occupation is required'
    }),
    fatherContactNo: Joi.string().trim().required().messages({
      'any.required': 'Father\'s contact number is required'
    }),
    motherName: Joi.string().trim().required().messages({
      'any.required': 'Mother\'s name is required'
    }),
    motherOccupation: Joi.string().trim().required().messages({
      'any.required': 'Mother\'s occupation is required'
    }),
    motherContactNo: Joi.string().trim().required().messages({
      'any.required': 'Mother\'s contact number is required'
    })
});

const localGuardianSchema = Joi.object({
    localGuardianName: Joi.string().trim().required().messages({
      'any.required': 'Local guardian\'s name is required'
    }),
    localGuardianAddress: Joi.string().trim().required().messages({
      'any.required': 'Local guardian\'s address is required'
    }),
    localGuardianContactNo: Joi.string().trim().required().messages({
      'any.required': 'Local guardian\'s contact number is required'
    })
});

//==================================Main JoiValidation Schema=================

const JoistudentValidationSchema = Joi.object({
    id: Joi.string().trim().required().messages({
      'any.required': 'ID is required'
    }),
    name: studentNameSchema.required().messages({
      'any.required': 'Student name is required'
    }),
    gender: Joi.string().valid('male', 'female').required().messages({
      'any.only': 'Gender must be either male or female',
      'any.required': 'Gender is required'
    }),
    dateOfBirth: Joi.string().trim().required().messages({
      'any.required': 'Date of birth is required'
    }),
    email: Joi.string().trim().email().required().messages({
      'any.required': 'Email is required',
      'string.email': 'Must be a valid email'
    }),
    contactNo: Joi.string().trim().required().messages({
      'any.required': 'Contact number is required'
    }),
    emergencyContactNo: Joi.string().trim().required().messages({
      'any.required': 'Emergency contact number is required'
    }),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').required().messages({
      'any.only': '{#label} is not supported',
      'any.required': 'Blood group is required'
    }),
    presentAddress: Joi.string().trim().required().messages({
      'any.required': 'Present address is required'
    }),
    permanentAddress: Joi.string().trim().required().messages({
      'any.required': 'Permanent address is required'
    }),
    guardianInfo: guardianInfoSchema.required().messages({
      'any.required': 'Guardian information is required'
    }),
    localGuardian: localGuardianSchema.required().messages({
      'any.required': 'Local guardian information is required'
    }),
    profileImg: Joi.string().uri().optional(),
    isActive: Joi.string().valid('active', 'block').default('active').messages({
      'any.only': 'Status must be either active or block'
    })
});

export default JoistudentValidationSchema;