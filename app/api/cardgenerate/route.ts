import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST endpoint to handle registration and send email
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, fatherName, email, courseName, age } = body;

    if (!name || !fatherName || !email || !courseName || !age) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "afrazsajid57@gmail.com", // your Gmail address
        pass: "acae tkcd gjln qqmp", // your Gmail app password
      },
    });

    // Email content
    const emailContent = `   <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <style>
                        body {
                          font-family: Arial, sans-serif;
                          margin: 0;
                          padding: 0;
                          background-color: #f4f4f4;
                        }
                        .card {

                          max-width: 280px;
                          height:490px;
                          margin: 20px auto;
                          background: #ffffff !important;
                          border: 1px solid #ddd;
                          border-radius: 8px;
                          overflow: hidden;
                          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        }
                        .card-header {
                          background: url('https://theazb.com/wp-content/uploads/2022/10/Saylani-Welfare.jpg') no-repeat center center;
                          background-size: cover;
                          height: 100px;
                          position: relative;
                        }
                        .card-header::after {
                          content: "";
                          display: block;
                          /* background: rgba(0, 0, 0, 0.5); */
                          height: 100%;
                          width: 100%;
                          position: absolute;
                          top: 0;
                          left: 0;
                        }
                        .card-header img {
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                          max-width: 120px;
                          height: auto;
                          z-index: 1;
                        }
                        .card img {
                          width: 170px;
                          height: auto;
                          margin: 16px auto;
                          display: block;
                          border-radius: 8px;
                        }
                        .card-content {
                          padding: 16px;
                          text-align: center;
                        }
                        .card-content h3 {
                          margin: 8px 0;
                          font-size: 1.2rem;
                          color: #333;
                        }
                        .card-content p {
                          margin: 4px 0;
                          font-size: 1rem;
                          color: #555;
                        }
                      </style>
                    </head>
                    <body>

                      <div class="card">
                        <!-- Organization Logo Section -->
                        <div class="card-header">
                          <!-- <img src="https://via.placeholder.com/120x60" alt="Organization Logo"> -->
                        </div>
                        <!-- Student Image Section -->
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljYSrXL1AK2EzLXxKDtbl3hrFbLphwvqzmw&s" alt="Student Image">
                        <!-- Student Info Section -->
                        <div class="card-content">
                          <h3>${name}</h3>
                          <p><strong>Roll Number:</strong>AIC-2745</p>
                          <p><strong>Course Name:</strong>${courseName}</p>                                   <p><strong>Contact no:</strong>${email}</p>

                        </div>
                      </div>
                      <center><p><strong> <a style="text-decoration: none ; color: #000;" href="https://prepli.vercel.app/studentpage?email=${email}">check your details on your portal</a></strong></p></center>
                     </body>
                    </html>`;

    const mailOptions = {
      from: "afrazsajid57@gmail.com",
      to: "afrazsajid55@gmail.com",
      subject: "Student ID Card",
      html: emailContent,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to:", email);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Card API!" }, { status: 200 });
}
