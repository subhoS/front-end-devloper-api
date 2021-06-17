const express = require("express");
const bodyParser = require("body-parser");
const { request, response } = require("express");
const app = express();
const port = 4000;

//npm -i -g nodemon

//npm install

//nodemon

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Server is running ,Welcome to  socal_app_api " });
});

app.post("/signin/", (request, response) => {
  console.log("got this data from login", request.body);
  response.status(200).json({ signin: "I have got your data" });
});

app.post("/signup/", (request, response) => {
  const { name, number, cratepassword, retype } = request.body;
  console.log("data recived by signup");
  console.log(name, number, cratepassword, retype);
  response.status(200).json({ signup: "I have got your data" });
});

app.listen(port, () => {
  console.log(`app is running on post ${port}`);
});
