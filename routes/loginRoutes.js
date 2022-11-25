const express = require("express");
const app = express();
const router = express.Router();

app.set("view engine", "pug");
app.set("views", "views");

// the user is not logged in. Lets help them.

router.get("/", (req, res, next) => {
  res.status(200).render("login");
});

module.exports = router;
