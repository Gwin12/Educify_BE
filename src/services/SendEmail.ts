import nodemailer from "nodemailer";

const SendEmail = async (to: String, subject: String, message: String) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Mail options
        const mailOptions: any = {
            from: process.env.EMAIL_USER,
            to,
            subject: subject,
            text: message
        };

        // Send mail
        // await transporter.sendMail(mailOptions);
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                transporter.close();
                console.error({ message: "Email Failed To Send!", status: error });
                return ({ success: false, message: "Email Failed To Send!", status: error })
            } else {
                console.log('success')
                return ({ success: true, message: "Email Sent Successfully.", status: info.response })
            }
        });

        return ({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Email error:", error);
        return ({ success: false, error: "Failed to send email" });
    }
}

export default SendEmail;