import nodemailer from "nodemailer";

export const subscribeNewsletter = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVER,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Dubai Homes Newsletter" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_USERNAME, // Admin receives the notification
      subject: `New Newsletter Subscriber`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #b07e50; margin-bottom: 20px;">New Subscriber Alert</h2>
          <p style="color: #4b5563; font-size: 15px;">A user has just subscribed to your newsletter:</p>
          <div style="background-color: #faf7f3; padding: 15px; border-radius: 6px; border-left: 4px solid #b07e50; margin-top: 15px;">
            <strong>Email:</strong> ${email}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    console.error("Error sending subscription email:", error);
    res.status(500).json({ success: false, message: "Failed to subscribe" });
  }
};