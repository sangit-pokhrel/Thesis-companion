import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = ["name", "email", "academicLevel", "service", "message"];
    const missingField = requiredFields.find(
      (field) => !String(body?.[field] ?? "").trim(),
    );

    if (missingField) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required field: ${missingField}`,
        },
        { status: 400 },
      );
    }

    // This route is the server-side entry point for the contact form.
    // Connect email/database persistence here later without adding Express.
    return NextResponse.json({
      success: true,
      message: "Contact request received successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request.",
      },
      { status: 400 },
    );
  }
}
