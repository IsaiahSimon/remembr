const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

app.set("view engine", "ejs"); // set up ejs for templating

app.use(bodyParser.urlencoded({ extended: true })); // parse form data client side
app.use(express.static("public")); // set up static files folder

const items = ["Buy Food", "Cook Food", "Eat Food"]; // outer scoped for all routes
const workItems = [];

// Home route
app.get("/", (req, res) => {
  const day = date.getDate();
  // const day = date.getDay();   // optional: to use getDay() instead of getDate()

  res.render("list", { listTitle: day, newListItems: items }); // render the list.ejs file with all variables
});

// POST route from form
app.post("/", (req, res) => {
  const item = req.body.newItem; // get the new item from the form

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

// Work route
app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", (req, res) => {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

// About route
app.get("/about", (req, res) => {
  res.render("about");
});

// Start the server
app.listen(3000, () => console.log("Server started on port 3000"))
