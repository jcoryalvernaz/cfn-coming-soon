const express = require("express");
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");
require("dotenv").config({ path: __dirname + "/variables.env" });

var mc_api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILCHIMP_LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

// Serve static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoints
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

// Catchall handler to send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

const port = process.env.PORT || 9001;
app.listen(port);

console.log(`Express listening on port ${port}`);
