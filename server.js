const express = require("express");
const Mailchimp = require("mailchimp-api-v3");
require("dotenv").config({ path: __dirname + "/variables.env" });

var mc_api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILCHIMP_LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

//routes
app.get("/api/memberAdd", (req, res) => {
  mailchimp
    .post(`/lists/${list_id}/members/`, {
      email_address: req.query.email,
      status: "subscribed"
    })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

const port = process.env.PORT || 9001;
app.listen(port);

console.log(`Express listening on port ${port}`);
