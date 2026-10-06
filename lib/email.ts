import nodemailer from "nodemailer";

const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: smtpUser,
    pass: smtpPassword,
  },
});

type ContactEmailData = {
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
  wordCount?: string | number;
  researchTopic: string;
  message: string;
  status: string;
};

export async function sendContactEmails(data: ContactEmailData) {
  if (!smtpUser || !smtpPassword) {
    throw new Error("SMTP credentials are not configured.");
  }

  /*
   * Email 1:
   * Send the customer's inquiry to the company email.
   */
  await transporter.sendMail({
    from: `"Thesis Companion" <${smtpUser}>`,
    to: smtpUser,
    replyTo: data.email,
    subject: `New Inquiry from ${data.name}`,
    text: `
New Contact Inquiry

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Preferred Contact: ${data.contactMethod}

Academic Level: ${data.academicLevel}
University: ${data.university}
Faculty / Department: ${data.faculty}
Program / Specialisation: ${data.program}

Service: ${data.service}
Deadline: ${data.deadline || "Not provided"}
Approximate Word Count: ${data.wordCount || "Not provided"}

Research Topic:
${data.researchTopic}

Message:
${data.message}

Submitted: ${data.date}
Status: ${data.status}
    `.trim(),
  });

  /*
   * Email 2:
   * Send an automatic confirmation to the customer.
   */
  await transporter.sendMail({
    from: `"Thesis Companion" <${smtpUser}>`,
    to: data.email,
    subject: "We Received Your Inquiry",
    text: `
Dear ${data.name},

Thank you for contacting Thesis Companion.

We have received your inquiry successfully. Our team will review the information you provided and get back to you shortly.

Your inquiry details:

Service: ${data.service}

Research Topic:
${data.researchTopic}

If you need to provide any additional information, you can simply reply to this email.

Best regards,
Thesis Companion
    `.trim(),
  });
}