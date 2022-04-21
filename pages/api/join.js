/* eslint-disable import/no-anonymous-default-export */
import nodemailer from "nodemailer"

const USER = process.env.NEXT_APP_MAIL_USER
const PASS = process.env.NEXT_APP_MAIL_PASS

export default async (req, res) => {
    const { email } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: USER,
                pass: PASS
            }
        })

        const response = await transporter.sendMail({
            from: email,
            to: "ey.ogunmola@gmail.com",
            subject: `Join Entrova Waitlist`,
            html: `
                <p>Hello Entrova, 
                <br/>
                This is a notification that <strong>${email}</strong> joined the waitlist.
                <br />
                <br />
                Cheers.
                </p>

                <p>Click <a href="https://entrova.co"> <em>here</em> </a> to visit website.</p>
            `
        })

        return res.status(200).json({
            status: "success",
            message: "Submitted Succesfully!"
        })
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: "Submitted Failed!"
        })
    }
}