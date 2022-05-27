const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.set("view engine", "ejs"); // set up ejs for templating

app.use(bodyParser.urlencoded({extended: true})); // parse form data client side

let items = ["Buy Food", "Cook Food", "Eat Food"]; // outer scoped for all routes

// Home page
app.get("/", (req, res) => {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  const day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day, newListItems: items}); // render the list.ejs file with all variables
});

// POST route
app.post("/", (req,res) => {
  let item = req.body.newItem; // get the new item from the form
  items.push(item);
  res.redirect("/");
});

// Start the server
app.listen(3000, () => console.log("Server started on port 3000"))
