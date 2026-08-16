import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ChatLeadRequest = {
  coupleName?: string;
  weddingDate?: string;
  venue?: string;
  service?: string;
  weddingType?: string;
  guestCount?: string;
  contactNumber?: string;
  email?: string;
  conversation?: string;
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
            "The chatbot inquiry email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const body =
      (await request.json()) as ChatLeadRequest;

    const rawCoupleName =
      body.coupleName?.trim() ?? "";

    const rawContactNumber =
      body.contactNumber?.trim() ?? "";

    /*
     * For chatbot leads we only require these two.
     * Other wedding details may not have been discussed yet.
     */
    if (!rawCoupleName || !rawContactNumber) {
      return NextResponse.json(
        {
          message:
            "Couple name and contact number are required.",
        },
        {
          status: 400,
        },
      );
    }

    const resend = new Resend(apiKey);

    const coupleName = cleanValue(
      rawCoupleName,
    );

    const contactNumber = cleanValue(
      rawContactNumber,
    );

    const weddingDate = cleanValue(
      body.weddingDate,
    );

    const venue = cleanValue(body.venue);

    const service = cleanValue(body.service);

    const weddingType = cleanValue(
      body.weddingType,
    );

    const guestCount = cleanValue(
      body.guestCount,
    );

    const customerEmail = cleanValue(
      body.email,
    );

    const conversation = cleanValue(
      body.conversation,
      "No conversation transcript available.",
    );

    const html = `
      <!doctype html>

      <html lang="en">
        <head>
          <meta charset="utf-8" />
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
                  padding:34px;
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
                    font-size:30px;
                    font-weight:400;
                  "
                >
                  New Chatbot Lead
                </h1>
              </div>

              <div style="padding:34px;">

                ${createDetailRow(
                  "Couple's Names",
                  coupleName,
                )}

                ${createDetailRow(
                  "Contact Number",
                  contactNumber,
                )}

                ${createDetailRow(
                  "Email",
                  customerEmail,
                )}

                ${createDetailRow(
                  "Wedding Date",
                  weddingDate,
                )}

                ${createDetailRow(
                  "Venue",
                  venue,
                )}

                ${createDetailRow(
                  "Interested Service",
                  service,
                )}

                ${createDetailRow(
                  "Wedding Type",
                  weddingType,
                )}

                ${createDetailRow(
                  "Guest Count",
                  guestCount,
                )}

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
                      margin:0 0 12px;
                      color:#a87868;
                      font-size:10px;
                      font-weight:700;
                      letter-spacing:2px;
                      text-transform:uppercase;
                    "
                  >
                    Chat Conversation
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
                    ${conversation}
                  </p>
                </div>

              </div>

              <div
                style="
                  padding:20px 34px;
                  background:#fffdfb;
                  border-top:1px solid #eadfd9;
                  color:#8a7d77;
                  font-size:11px;
                  text-align:center;
                "
              >
                Lead collected by Chathu Concierge
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [receiverEmail],
      subject: `New Chatbot Lead — ${rawCoupleName}`,
      html,
    });

    if (error) {
      console.error(
        "Resend chatbot lead error:",
        error,
      );

      return NextResponse.json(
        {
          message:
            "The chatbot inquiry could not be sent.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your details were sent successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(
      "Chatbot lead API route failed:",
      error,
    );

    return NextResponse.json(
      {
        message:
          "Something went wrong while sending the chatbot inquiry.",
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
    <div
      style="
        padding:13px 0;
        border-bottom:1px solid #eee4df;
      "
    >
      <div
        style="
          margin-bottom:5px;
          color:#a87868;
          font-size:10px;
          font-weight:700;
          letter-spacing:1.4px;
          text-transform:uppercase;
        "
      >
        ${label}
      </div>

      <div
        style="
          color:#4c423e;
          font-size:14px;
          line-height:1.6;
        "
      >
        ${value}
      </div>
    </div>
  `;
}