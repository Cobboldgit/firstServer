const express = require("express");
const path = require('path')

const app = express();

const handleHomeRoute = (request, response) => {
  const homePath = path.join(__dirname, "public", "pages", "Home.html");
  response.sendFile(homePath);
};

const handleAboutRoute = (request, response) => {
  const aboutPath = path.join(__dirname, "public", "pages", "About.html");
  response.sendFile(aboutPath);
};

app.get("/about", handleAboutRoute);
app.get("/", handleHomeRoute);

app.listen("5003", () => {
  console.log("server is running on port 5003");
});
