export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  gender: string;
  occupation: string;
};

export interface WorkExperience {
  companyName: string;
  timeFrame: string;
  role: string;
  techStack: string;
  achievements: string[];
}

export interface Studies {
  institutionName: string;
  timeFrame: string;
  degree: string;
  achievement?: string;
}

export interface Certifications {
  name: string;
  timeFrame: string;
  issuingOrganization: string;
  credentialUrl?: string;
  imageLocation?: string;
}