import { Certifications } from "@/common/interface";

export function mapSheetDataToCertifications(data: string[][]): Certifications[] {
    const certifications: Certifications[] = [];
    for (const row of data) {
        certifications.push({
            name: row[0] ?? "",
            timeFrame: row[1] ?? "",
            issuingOrganization: row[2] ?? "",
            credentialUrl: row[3] ?? null,
            imageLocation: row[4] ?? null,
        });
    }
    return certifications;
}