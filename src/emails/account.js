const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SEND_API_KEY
const address = process.env.EMAIL_ADDRESS

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: address,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }).catch(e => {
        console.log(e)
        console.log(e.response.body)
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: address,
        subject: `Sorry to see you go`,
        text: `Goodbeye ${name}. Was there anything we could have done to keep you around?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}