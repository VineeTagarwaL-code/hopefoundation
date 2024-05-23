"use server"
import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  text: string
}

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  service: process.env.NEXT_PUBLIC_SMTP_SERVICE,
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  })
} 