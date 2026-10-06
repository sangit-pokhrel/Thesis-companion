import { NextResponse } from "next/server";
import { ValidationError } from "yup";

import { contactSchema } from "@/lib/validation/contactSchema";
import { addContactToGoogleSheet } from "@/lib/googleSheets";
import { sendContactEmails } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const allowedOrigins =
      process.env.CONTACT_ALLOWED_ORIGINS
        ?.split(",")
        .map((origin) => origin.trim().replace(/\/$/, ""))
        .filter(Boolean) ?? [];

    const origin = request.headers.get("origin")?.replace(/\/$/, "");

    if (!origin || !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized request.",
        },
        { status: 403 },
      );
    }

    const body = await request.json();

    const validatedData = await contactSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const submissionDate = new Date().toISOString();

    /*
     * Google Sheets is the primary submission storage.
     * If this succeeds, the inquiry has been recorded successfully.
     */
    await addContactToGoogleSheet({
      date: submissionDate,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      contactMethod: validatedData.contactMethod,
      academicLevel: validatedData.academicLevel,
      university: validatedData.university,
      faculty: validatedData.faculty,
      program: validatedData.program,
      service: validatedData.service,
      deadline: validatedData.deadline,
      wordCount: validatedData.wordCount,
      researchTopic: validatedData.researchTopic,
      message: validatedData.message,
      status: "NEW",
    });

    /*
     * Email is secondary.
     *
     * If SMTP temporarily fails, the Google Sheets submission
     * has already succeeded, so the form should still succeed.
     */
    try {
      await sendContactEmails({
        date: submissionDate,
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        contactMethod: validatedData.contactMethod,
        academicLevel: validatedData.academicLevel,
        university: validatedData.university,
        faculty: validatedData.faculty,
        program: validatedData.program,
        service: validatedData.service,
        deadline: validatedData.deadline,
        wordCount: validatedData.wordCount,
        researchTopic: validatedData.researchTopic,
        message: validatedData.message,
        status: "NEW",
      });
    } catch (emailError) {
      console.error(
        "SMTP email sending failed. Google Sheets submission was successful:",
        emailError,
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been submitted successfully.",
      },
      { status: 201 },
    );
  } catch (error) {
    /*
     * Validation errors
     */
    if (error instanceof ValidationError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you entered.",
          errors: error.inner.reduce<Record<string, string>>(
            (accumulator, currentError) => {
              if (
                currentError.path &&
                !accumulator[currentError.path]
              ) {
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

    /*
     * Google Sheets or other unexpected errors
     */
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