export interface Student {
  id: string;
  name: string;
  rollNo: string;
  bloodGroup: string;
  cgpa: number;
}

export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
