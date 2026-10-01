const GOOGLE_SHEETS_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL;

interface GoogleSheetSubmission {
  date: string;
  name: string;
  email: string;
  phone?: string;
  contactMethod: string;
  academicLevel: string;
  university: string;
  faculty: string;
  program: string;
  service: string;
  deadline?: string;
  wordCount?: number;
  researchTopic: string;
  message: string;
  status: string;
}

export async function addContactToGoogleSheet(
  submission: GoogleSheetSubmission,
) {
  if (!GOOGLE_SHEETS_WEBHOOK_URL) {
    throw new Error(
      "GOOGLE_SHEETS_WEBHOOK_URL is not configured.",
    );
  }

  const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Google Sheets request failed with status ${response.status}.`,
    );
  }

  return response.json();
}