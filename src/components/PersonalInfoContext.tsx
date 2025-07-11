"use client";
import { PersonalInfo, WorkExperience, Studies, Certifications } from '@/common/interface';
import { mapSheetDataToPersonalInfo } from '@/utils/userInfoMapper';
import { mapSheetDataToWorkExp } from '@/utils/workExpMapper';
import { mapSheetDataToStudies } from '@/utils/studiesMapper';
import { mapSheetDataToCertifications } from '@/utils/certificationsMapper';
import React, { useEffect, useContext, useState } from 'react';

type PersonalInfoContextType = {
  personalInfo: PersonalInfo;
  workExperiences: WorkExperience[];
  studies: Studies[];
  certifications: Certifications[];
}

const PersonalInfoContext = React.createContext<PersonalInfoContextType | undefined>(undefined);

export const PersonalInfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({} as PersonalInfo);
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [studies, setStudies] = useState<Studies[]>([]);
  const [certifications, setCertifications] = useState<Certifications[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/google-sheet');
        if (response.ok) {
          const result = await response.json();
          setPersonalInfo(mapSheetDataToPersonalInfo(result?.[0]?.values || []));
          setWorkExperiences(mapSheetDataToWorkExp(result?.[1]?.values || []));
          setStudies(mapSheetDataToStudies(result?.[2]?.values || []));
          setCertifications(mapSheetDataToCertifications(result?.[3]?.values || []));
        } else {
          console.error('Failed to fetch personal info', response.status);
        }
      } catch (error) {
        console.error('Error fetching personal info:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <PersonalInfoContext.Provider value={{ personalInfo, workExperiences, studies, certifications }}>
      {children}
    </PersonalInfoContext.Provider>
  );
}

export const usePersonalInfo = () => {
  // const context = useContext(PersonalInfoContext);
  // if (!context) {
  //   throw new Error('usePersonalInfo must be used within a PersonalInfoProvider');
  // }
  // return context;
  return useContext(PersonalInfoContext);
}