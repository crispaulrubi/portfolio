import { Studies } from "@/common/interface";

export function mapSheetDataToStudies(data: string[][]): Studies[] {
    const studies: Studies[] = [];
    for (const row of data) {
        studies.push({
            institutionName: row[0] ?? "",
            timeFrame: row[1] ?? "",
            degree: row[2] ?? "",
            achievement: row[3] ?? "",
        });
    }
    return studies;
}