import { NextResponse } from "next/server";
import { ValidationError } from "yup";

import { connectToDatabase } from "@/lib/mongodb";
import { ContactSubmission } from "@/models/ContactSubmission";
import { contactSchema } from "@/lib/validation/contactSchema";
import { addContactToGoogleSheet } from "@/lib/googleSheets";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = await contactSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    await connectToDatabase();

    const submission = await ContactSubmission.create({
      ...validatedData,
      status: "NEW",
    });

    try {
      await addContactToGoogleSheet({
        date: submission.createdAt.toISOString(),
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        contactMethod: submission.contactMethod,
        academicLevel: submission.academicLevel,
        university: submission.university,
        faculty: submission.faculty,
        program: submission.program,
        service: submission.service,
        deadline: submission.deadline,
        wordCount: submission.wordCount,
        researchTopic: submission.researchTopic,
        message: submission.message,
        status: submission.status,
      });
    } catch (googleSheetError) {
      console.error("Google Sheets sync failed:", googleSheetError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been submitted successfully.",
        submissionId: submission._id.toString(),
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you entered.",
          errors: error.inner.reduce<Record<string, string>>(
            (accumulator, currentError) => {
              if (currentError.path && !accumulator[currentError.path]) {
                accumulator[currentError.path] = currentError.message;
              }

              return accumulator;
            },
            {},
          ),
        },
        { status: 400 },
      );
    }

    console.error("Contact submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while submitting your request. Please try again.",
      },
      { status: 500 },
    );
  }
}
