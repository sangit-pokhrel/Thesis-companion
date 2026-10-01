import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email address is required")
    .max(150, "Email address is too long"),

  phone: yup
    .string()
    .trim()
    .max(30, "Phone number is too long")
    .optional(),

  contactMethod: yup
    .string()
    .trim()
    .required("Please select a preferred contact method"),

  academicLevel: yup
    .string()
    .trim()
    .required("Please select your degree level"),

  university: yup
    .string()
    .trim()
    .required("University / institution is required")
    .max(200, "University name is too long"),

  faculty: yup
    .string()
    .trim()
    .required("Faculty / department is required")
    .max(200, "Faculty / department is too long"),

  program: yup
    .string()
    .trim()
    .required("Program / specialisation is required")
    .max(200, "Program name is too long"),

  service: yup
    .string()
    .trim()
    .required("Please select a service"),

  deadline: yup
    .string()
    .trim()
    .optional(),

  wordCount: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" || originalValue == null
        ? undefined
        : value,
    )
    .typeError("Word count must be a number")
    .min(0, "Word count cannot be negative")
    .max(1000000, "Please enter a valid word count")
    .optional(),

  researchTopic: yup
    .string()
    .trim()
    .required("Research topic is required")
    .min(3, "Research topic is too short")
    .max(300, "Research topic is too long"),

  message: yup
    .string()
    .trim()
    .required("Detailed message is required")
    .min(10, "Please provide a little more detail")
    .max(5000, "Message is too long"),
});