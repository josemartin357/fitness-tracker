const path = require("path");
const router = require("express").Router();

//display home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

//display exercise page
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/exercise.html"));
});

//display stats page
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/stats.html"));
});

module.exports = router;
