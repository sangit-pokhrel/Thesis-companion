import { NextResponse } from "next/server";
import { ValidationError } from "yup";

import { contactSchema } from "@/lib/validation/contactSchema";
import { addContactToGoogleSheet } from "@/lib/googleSheets";

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

    await addContactToGoogleSheet({
      date: new Date().toISOString(),
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

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been submitted successfully.",
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