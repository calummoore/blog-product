const axios = require('axios')
const sendEmail = require('./email')

const text = `Hi

Thanks for subscribing 🙏! You've been added to the list and should expect ~1 e-mail update a week.

You can also follow us on @snapboard_io on Twitter.


Thanks again,
Calum`

const key = 'b4379edc-bdde-11e9-9307-06b4694bee2a'
const listId = '7eacf53f-8892-11e9-9307-06b4694bee2a'

module.exports = async (email) => {
  // Subscribe to list
  await axios.post('https://emailoctopus.com/api/1.5/lists/' + listId + '/contacts', {
    api_key: key,
    email_address: email,
  })

  // Send an e-mail
  await sendEmail({
    from: 'Calum <calum@snapboard.io>',
    to: email,
    subject: 'You\'re subscribed to the Snapboard Blog!',
    text,
  })

  return 'OK'
}
