import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { OAuth2Client } from "google-auth-library";

export async function GET(request: NextRequest) {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            type: process.env.TYPE,
            project_id: process.env.GOOGLE_AUTH_PROJECT_ID,
            private_key_id: process.env.GOOGLE_AUTH_PRIVATE_KEY_ID,
            private_key: process.env.GOOGLE_AUTH_PRIVATE_KEY?.replaceAll(/\\n/g, '\n'),
            client_email: process.env.GOOGLE_AUTH_CLIENT_EMAIL,
            client_id: process.env.GOOGLE_AUTH_CLIENT_ID,
            universe_domain: process.env.GOOGLE_AUTH_UNIVERSE_DOMAIN,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    try {
        const authClient = await auth.getClient() as OAuth2Client;
        const sheets = google.sheets({ version: 'v4', auth: authClient });

        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        const response = await sheets.spreadsheets.values.batchGet({
            spreadsheetId,
            ranges: ['basic-info!A1:B7', 'work-experience!A2:E', 'studies!A2:D6'],
        });

        return NextResponse.json(response?.data?.valueRanges ?? [], { status: 200 });
    } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
        return new Response("Error fetching data", { status: 500 });
    }
}