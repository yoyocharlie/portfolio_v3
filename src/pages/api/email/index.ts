import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

export default async function handler(request: NextRequest) {
  let body = "";
  if (typeof request.body === "string") {
    body = request.body;
  } else if (request.body instanceof ReadableStream) {
    const reader = request.body.getReader();
    const { value, done } = await reader.read();
    if (!done) {
      body = new TextDecoder("utf-8").decode(value);
    }
  }

  const { email, name, message } = JSON.parse(body);

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `From Portflio: ${name} (${email})`,
    html: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return;
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
