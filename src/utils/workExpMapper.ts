import { WorkExperience } from "@/common/interface";

export function mapSheetDataToWorkExp(data: string[][]): WorkExperience[] {
    const workExperienceList: WorkExperience[] = [];
    for (const row of data) {
        if (row.length === 0) continue;
        if (row[0] === "") {
            workExperienceList[workExperienceList.length - 1].achievements.push(row[4] ?? "");
        } else {
            const workExperience: WorkExperience = {
                companyName: row[0] ?? "",
                timeFrame: row[1] ?? "",
                role: row[2] ?? "",
                techStack: row[3] ?? "",
                achievements: [row[4] ?? ""],
            };
            workExperienceList.push(workExperience);
        }
    }
    return workExperienceList;
}