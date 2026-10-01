import mongoose, { Schema, type Model } from "mongoose";

export interface ContactSubmissionDocument {
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

  status: "NEW" | "CONTACTED" | "IN_DISCUSSION" | "CONFIRMED" | "COMPLETED";

  createdAt: Date;
  updatedAt: Date;
}

const ContactSubmissionSchema =
  new Schema<ContactSubmissionDocument>(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },

      phone: {
        type: String,
        trim: true,
      },

      contactMethod: {
        type: String,
        required: true,
        trim: true,
      },

      academicLevel: {
        type: String,
        required: true,
        trim: true,
      },

      university: {
        type: String,
        required: true,
        trim: true,
      },

      faculty: {
        type: String,
        required: true,
        trim: true,
      },

      program: {
        type: String,
        required: true,
        trim: true,
      },

      service: {
        type: String,
        required: true,
        trim: true,
      },

      deadline: {
        type: String,
        trim: true,
      },

      wordCount: {
        type: Number,
      },

      researchTopic: {
        type: String,
        required: true,
        trim: true,
      },

      message: {
        type: String,
        required: true,
        trim: true,
      },

      status: {
        type: String,
        enum: [
          "NEW",
          "CONTACTED",
          "IN_DISCUSSION",
          "CONFIRMED",
          "COMPLETED",
        ],
        default: "NEW",
      },
    },
    {
      timestamps: true,
    },
  );

export const ContactSubmission: Model<ContactSubmissionDocument> =
  mongoose.models.ContactSubmission ||
  mongoose.model<ContactSubmissionDocument>(
    "ContactSubmission",
    ContactSubmissionSchema,
  );