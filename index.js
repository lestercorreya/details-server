const express = require("express");
const app = express();
var bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors({ origin: true }));

// parse application/json
app.use(bodyParser.json());

// variables
var people = [];
//variables

// Route handling
app.post("/add", (req, res) => {
  people.push(req.body.entry);
  console.log("Person added successfully");
});

app.get("/retrieve", (req, res) => {
  res.send({ people: people });
  console.log("People retrieved successfully");
});

// Server setup
app.listen(8000, () => {
  console.log("server listening on port 8000");
});
