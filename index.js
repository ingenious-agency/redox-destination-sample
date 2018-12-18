require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const {
  verifyCaller,
  answerChallenge,
  routeMessages
} = require("@ingenious-redox/destination-middleware");
const app = express();

app.use(bodyParser.json());
app.use(verifyCaller(process.env.VERIFICATION_TOKEN));
app.get("/", answerChallenge);
app.post("/", routeMessages(app));

app.post("/ClinicalSummary/PatientPush", (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
