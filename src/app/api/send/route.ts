import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formBody = await request.json();

  const transporter = nodemailer.createTransport({
    service: process.env.MAILER_SERVICE,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  });

  interface EmailBody {
    from: string;
    to: string;
    subject: string;
    text: string;
  }

  const sendMail = async (emailBody: EmailBody) => {
    const mailOptions = {
      from: emailBody.from,
      to: emailBody.to,
      subject: emailBody.subject,
      text: emailBody.text,
    };
    await transporter
      .sendMail(mailOptions)
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  try {
    await sendMail(formBody);
    return NextResponse.json(
      {
        message: "Mensaje enviado con éxito",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error al enviar el mensaje",
      },
      { status: 500 }
    );
  }
}
