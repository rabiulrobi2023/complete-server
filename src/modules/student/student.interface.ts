

export type StudentName = {
    firstName: string;
    midName: string;
    lastName: string;
  }

  export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
  }
export type LocalGuardian= {
    localGuardianName: string;
    localGuardianAddress: string;
    localGuardianContactNo: string;

}

export type Student = {
  id: string;
  name: StudentName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  avator?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardianInfo: Guardian;
  localGuardian: LocalGuardian;
  profileImg?:string;
  isActive: "active"|"block";
}
