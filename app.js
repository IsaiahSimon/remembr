const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.set("view engine", "ejs"); // set up ejs for templating

app.use(bodyParser.urlencoded({extended: true})); // parse form data client side
app.use(express.static("public")); // set up static files folder


let items = ["Buy Food", "Cook Food", "Eat Food"]; // outer scoped for all routes
let workItems = [];

// Home page
app.get("/", (req, res) => {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  const day = today.toLocaleDateString("en-US", options);

  res.render("list", {listTitle: day, newListItems: items}); // render the list.ejs file with all variables
});

// POST route from form
app.post("/", (req,res) => {
  let item = req.body.newItem; // get the new item from the form

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
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

// About route
app.get("/about", (req, res) => {
  res.render("about");
});

// Start the server
app.listen(3000, () => console.log("Server started on port 3000"))
