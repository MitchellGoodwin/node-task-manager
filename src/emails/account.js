const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY
const address = process.env.EMAIL_ADDRESS

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: address,
    from: address,
    subject: 'This is my first creation',
    text: 'I hope this actually gets to you'
})