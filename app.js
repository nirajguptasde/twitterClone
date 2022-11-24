const express = require("express");
const app = express();
const port = 3003;

// create server instance
const server = app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

// set view engine

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
  let payload = {
    title: "Welcome To Twitter Clone",
    country: "Twitter India",
  };
  res.status(200).render("home", payload);
});
