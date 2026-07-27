import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type AppointmentRequest = {
  coupleName?: string;
  email?: string;
  contactNumber?: string;
  weddingDate?: string;
  venue?: string;
  service?: string;
  weddingType?: string;
  guestCount?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const cleanValue = (
  value: unknown,
  fallback = "Not provided",
) => {
  if (typeof value !== "string") {
    return fallback;
  }

  const cleaned = value.trim();

  return cleaned ? escapeHtml(cleaned) : fallback;
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const formatWeddingDate = (dateValue: string) => {
  if (!dateValue) {
    return "Not provided";
  }

  const date = new Date(`${dateValue}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return cleanValue(dateValue);
  }

  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail =
      process.env.APPOINTMENT_RECEIVER_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !receiverEmail || !fromEmail) {
      console.error(
        "Missing Resend environment configuration.",
      );

      return NextResponse.json(
        {
          message:
            "The appointment email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const body =
      (await request.json()) as AppointmentRequest;

    const rawCoupleName = body.coupleName?.trim() ?? "";
    const rawEmail = body.email?.trim() ?? "";
    const rawContactNumber =
      body.contactNumber?.trim() ?? "";
    const rawWeddingDate =
      body.weddingDate?.trim() ?? "";
    const rawService = body.service?.trim() ?? "";
    const rawWeddingType =
      body.weddingType?.trim() ?? "";

    if (
      !rawCoupleName ||
      !rawEmail ||
      !rawContactNumber ||
      !rawWeddingDate ||
      !rawService ||
      !rawWeddingType
    ) {
      return NextResponse.json(
        {
          message:
            "Please complete all required appointment fields.",
        },
        {
          status: 400,
        },
      );
    }

    if (!isValidEmail(rawEmail)) {
      return NextResponse.json(
        {
          message:
            "Please provide a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    const resend = new Resend(apiKey);

    const coupleName = cleanValue(rawCoupleName);
    const customerEmail = cleanValue(rawEmail);
    const contactNumber = cleanValue(
      rawContactNumber,
    );
    const weddingDate = formatWeddingDate(
      rawWeddingDate,
    );
    const venue = cleanValue(body.venue);
    const service = cleanValue(rawService);
    const weddingType = cleanValue(rawWeddingType);
    const guestCount = cleanValue(body.guestCount);
    const message = cleanValue(body.message);

    const inquiryEmailHtml = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
        </head>

        <body
          style="
            margin:0;
            padding:0;
            background:#f8f3f0;
            color:#2f2927;
            font-family:Arial,Helvetica,sans-serif;
          "
        >
          <div
            style="
              width:100%;
              padding:32px 12px;
              box-sizing:border-box;
            "
          >
            <div
              style="
                max-width:680px;
                margin:0 auto;
                background:#ffffff;
                border:1px solid #eadfd9;
              "
            >
              <div
                style="
                  padding:34px 34px 30px;
                  background:#2f2927;
                  color:#ffffff;
                  text-align:center;
                "
              >
                <p
                  style="
                    margin:0 0 12px;
                    color:#d6bba7;
                    font-size:11px;
                    font-weight:700;
                    letter-spacing:3px;
                    text-transform:uppercase;
                  "
                >
                  Chathu Wedding Planners
                </p>

                <h1
                  style="
                    margin:0;
                    font-family:Georgia,serif;
                    font-size:32px;
                    font-weight:400;
                    line-height:1.2;
                  "
                >
                  New Wedding Inquiry
                </h1>
              </div>

              <div style="padding:34px;">
                <p
                  style="
                    margin:0 0 26px;
                    color:#766d69;
                    font-size:15px;
                    line-height:1.7;
                  "
                >
                  A new appointment request was submitted
                  through the Chathu Wedding Planners website.
                </p>

                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  style="
                    width:100%;
                    border-collapse:collapse;
                  "
                >
                  ${createDetailRow(
                    "Couple's Names",
                    coupleName,
                  )}

                  ${createDetailRow(
                    "Wedding Date",
                    weddingDate,
                  )}

                  ${createDetailRow(
                    "Required Service",
                    service,
                  )}

                  ${createDetailRow(
                    "Wedding Type",
                    weddingType,
                  )}

                  ${createDetailRow(
                    "Contact Number",
                    contactNumber,
                  )}

                  ${createDetailRow(
                    "Email Address",
                    customerEmail,
                  )}

                  ${createDetailRow("Venue", venue)}

                  ${createDetailRow(
                    "Estimated Guest Count",
                    guestCount,
                  )}
                </table>

                <div
                  style="
                    margin-top:28px;
                    padding:22px;
                    background:#fff8f4;
                    border-left:4px solid #a87868;
                  "
                >
                  <p
                    style="
                      margin:0 0 10px;
                      color:#a87868;
                      font-size:10px;
                      font-weight:700;
                      letter-spacing:2px;
                      text-transform:uppercase;
                    "
                  >
                    Customer Message
                  </p>

                  <p
                    style="
                      margin:0;
                      color:#4c423e;
                      font-size:14px;
                      line-height:1.8;
                      white-space:pre-line;
                    "
                  >
                    ${message}
                  </p>
                </div>

                <div
                  style="
                    margin-top:30px;
                    text-align:center;
                  "
                >
                  <a
                    href="mailto:${customerEmail}"
                    style="
                      display:inline-block;
                      padding:15px 25px;
                      background:#a87868;
                      color:#ffffff;
                      font-size:11px;
                      font-weight:700;
                      letter-spacing:2px;
                      text-decoration:none;
                      text-transform:uppercase;
                    "
                  >
                    Reply to Customer
                  </a>
                </div>
              </div>

              <div
                style="
                  padding:20px 34px;
                  background:#fffdfb;
                  border-top:1px solid #eadfd9;
                  color:#8a7d77;
                  font-size:11px;
                  line-height:1.7;
                  text-align:center;
                "
              >
                Submitted through the Chathu Wedding Planners
                website appointment form.
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const confirmationEmailHtml = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
        </head>

        <body
          style="
            margin:0;
            padding:0;
            background:#f8f3f0;
            color:#2f2927;
            font-family:Arial,Helvetica,sans-serif;
          "
        >
          <div
            style="
              width:100%;
              padding:32px 12px;
              box-sizing:border-box;
            "
          >
            <div
              style="
                max-width:640px;
                margin:0 auto;
                background:#ffffff;
                border:1px solid #eadfd9;
              "
            >
              <div
                style="
                  padding:36px 30px;
                  background:#2f2927;
                  color:#ffffff;
                  text-align:center;
                "
              >
                <p
                  style="
                    margin:0 0 12px;
                    color:#d6bba7;
                    font-size:11px;
                    font-weight:700;
                    letter-spacing:3px;
                    text-transform:uppercase;
                  "
                >
                  Chathu Wedding Planners
                </p>

                <h1
                  style="
                    margin:0;
                    font-family:Georgia,serif;
                    font-size:32px;
                    font-weight:400;
                    line-height:1.25;
                  "
                >
                  Thank You for Contacting Us
                </h1>
              </div>

              <div style="padding:36px 34px;">
                <p
                  style="
                    margin:0 0 18px;
                    color:#2f2927;
                    font-family:Georgia,serif;
                    font-size:24px;
                    line-height:1.4;
                  "
                >
                  Dear ${coupleName},
                </p>

                <p
                  style="
                    margin:0 0 18px;
                    color:#665d59;
                    font-size:15px;
                    line-height:1.8;
                  "
                >
                  Thank you for choosing Chathu Wedding
                  Planners and sharing your wedding details
                  with us.
                </p>

                <p
                  style="
                    margin:0 0 24px;
                    color:#665d59;
                    font-size:15px;
                    line-height:1.8;
                  "
                >
                  We have received your appointment request.
                  Our team will review your wedding date,
                  service requirements and availability, and
                  contact you as soon as possible.
                </p>

                <div
                  style="
                    margin:26px 0;
                    padding:24px;
                    background:#fff8f4;
                    border:1px solid #ead8d0;
                  "
                >
                  <p
                    style="
                      margin:0 0 16px;
                      color:#a87868;
                      font-size:10px;
                      font-weight:700;
                      letter-spacing:2px;
                      text-transform:uppercase;
                    "
                  >
                    Your Request Summary
                  </p>

                  <p
                    style="
                      margin:0 0 9px;
                      color:#4c423e;
                      font-size:14px;
                      line-height:1.7;
                    "
                  >
                    <strong>Wedding date:</strong>
                    ${weddingDate}
                  </p>

                  <p
                    style="
                      margin:0 0 9px;
                      color:#4c423e;
                      font-size:14px;
                      line-height:1.7;
                    "
                  >
                    <strong>Service:</strong>
                    ${service}
                  </p>

                  <p
                    style="
                      margin:0;
                      color:#4c423e;
                      font-size:14px;
                      line-height:1.7;
                    "
                  >
                    <strong>Wedding type:</strong>
                    ${weddingType}
                  </p>
                </div>

                <p
                  style="
                    margin:0;
                    color:#665d59;
                    font-size:15px;
                    line-height:1.8;
                  "
                >
                  Warm regards,<br />
                  <strong>Chathu Wedding Planners</strong>
                </p>
              </div>

              <div
                style="
                  padding:22px 30px;
                  background:#251f1d;
                  color:#ffffff;
                  font-size:12px;
                  line-height:1.8;
                  text-align:center;
                "
              >
                <a
                  href="tel:+94762606777"
                  style="
                    color:#d6bba7;
                    text-decoration:none;
                  "
                >
                  +94 76 260 6777
                </a>

                <br />

                <a
                  href="mailto:chathuweddingplanners@gmail.com"
                  style="
                    color:#d6bba7;
                    text-decoration:none;
                  "
                >
                  chathuweddingplanners@gmail.com
                </a>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const { error: inquiryEmailError } =
      await resend.emails.send({
        from: fromEmail,
        to: [receiverEmail],
        replyTo: rawEmail,
        subject: `New Wedding Inquiry — ${rawCoupleName}`,
        html: inquiryEmailHtml,
      });

    if (inquiryEmailError) {
      console.error(
        "Resend inquiry email error:",
        inquiryEmailError,
      );

      return NextResponse.json(
        {
          message:
            "The appointment request could not be emailed.",
        },
        {
          status: 500,
        },
      );
    }

    const { error: confirmationEmailError } =
      await resend.emails.send({
        from: fromEmail,
        to: [rawEmail],
        replyTo: receiverEmail,
        subject:
          "We received your wedding inquiry — Chathu Wedding Planners",
        html: confirmationEmailHtml,
      });

    if (confirmationEmailError) {
      console.error(
        "Resend confirmation email error:",
        confirmationEmailError,
      );

      /*
       * The business inquiry was already delivered, so we
       * still return success to avoid creating duplicate
       * inquiries if the customer submits the form again.
       */
    }

    return NextResponse.json(
      {
        message:
          "Your appointment request was sent successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(
      "Appointment API route failed:",
      error,
    );

    return NextResponse.json(
      {
        message:
          "Something went wrong while sending your appointment request.",
      },
      {
        status: 500,
      },
    );
  }
}

function createDetailRow(
  label: string,
  value: string,
) {
  return `
    <tr>
      <td
        style="
          width:38%;
          padding:13px 12px;
          border-bottom:1px solid #eee4df;
          color:#a87868;
          font-size:10px;
          font-weight:700;
          letter-spacing:1.4px;
          text-transform:uppercase;
          vertical-align:top;
        "
      >
        ${label}
      </td>

      <td
        style="
          padding:13px 12px;
          border-bottom:1px solid #eee4df;
          color:#4c423e;
          font-size:14px;
          line-height:1.6;
          vertical-align:top;
        "
      >
        ${value}
      </td>
    </tr>
  `;
}