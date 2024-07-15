// app/api/send-email/route.ts

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  const { name, email, message }: RequestBody = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "Mohammadghiasi005@gmail.com",
    subject: "Customer Message.",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}
