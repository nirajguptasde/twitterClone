const express = require("express");
const app = express();
const port = 3003;
const middleware = require("./middleware");

// create server instance
const server = app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

// set view engine

app.set("view engine", "pug");
app.set("views", "views");

// declare our routes
const loginRoute = require("./routes/loginRoutes");

app.use("/login", loginRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {
  let payload = {
    title: "Welcome To Twitter Clone",
    country: "Twitter India",
  };
  res.status(200).render("home", payload);
});
