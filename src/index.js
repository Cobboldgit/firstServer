const express = require("express");

const app = express();

app.use("/About", (req, res) => {
  res.send("About");
});

app.use("/Login", (req, res) => {
  res.send("Login");
});

app.use("/", (req, res) => {
  res.send("Hola amigos, you are in the HOME PAGE");
});

app.listen("5003", () => {
  console.log("server is running on port 5003");
});
