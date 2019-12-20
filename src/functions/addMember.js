const Mailchimp = require("mailchimp-api-v3")
require("dotenv").config({ path: __dirname + "/variables.env"});

const mcApiKey = process.env.MAILCHIMP_API_KEY;
const listId = process.env.MAILCHIMP_LIST_ID;

exports.handler = async (event, context, callback) => {
  try {
    const mailchimp = new Mailchimp(mcApiKey);
    await mailchimp.post(`lists/${listId}/members`, {
      email_address: event.queryStringParameters.email,
      status: "subscribed"
    })
    .then(res => {
      return {
        statusCode: 200,
        body: JSON.stringify(res)
      }
    })
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  }
};
