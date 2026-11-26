import nodemailer from "nodemailer";

export const submitConsultation = async (req, res) => {
  const { userType, name, email, phone, propertyType, message } = req.body;

  try {
    // 1. Set up Nodemailer Transporter using your .env variables
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVER,
      port: process.env.MAIL_PORT,
      secure: false, // true for 465, false for other ports (587)
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // 2. Setup the Email Content
    const mailOptions = {
      from: `"Dubai Homes Website" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_USERNAME, // Sending to yourself (the admin)
      replyTo: email, // If admin clicks 'reply', it goes to the user
      subject: `New Consultation Request from ${name} (${userType})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #b07e50; margin-bottom: 20px;">New Lead from Website</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; width: 120px;">User Type:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; text-transform: capitalize;">${userType}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Property Type:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${propertyType}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="font-weight: bold; margin-bottom: 8px;">Message:</p>
            <div style="background-color: #fcf9f6; padding: 15px; border-radius: 6px; color: #4b5563;">
              ${message ? message : "No message provided."}
            </div>
          </div>
        </div>
      `,
    };

    // 3. Send the Email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};