const express = require("express");
const bodyParser = require("body-parser");

express()
  .get("/", (req, res) => res.send("Hello"))
  .listen(3000, () => console.log("Server started on port 3000"))

