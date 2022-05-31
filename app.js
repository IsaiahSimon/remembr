const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const date = require(__dirname + "/date.js");                             // simplify for adding MongoDB

const app = express();

app.set("view engine", "ejs");                                              // set up ejs for templating

app.use(bodyParser.urlencoded({ extended: true }));                         // parse form data client side
app.use(express.static("public"));                                          // set up static files folder

mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true }); // connect to mongodb

const itemsSchema = new Schema({                                            // create schema for items
  name: String
});

const Item = mongoose.model(                                                // create model for items
  "Item",                                                                   // Singular name of collection
  itemsSchema
);

const item1 = new Item({                                                    // create new item
  name: "Welcome to your todo list!"
});

const item2 = new Item({
  name: "Hit the + button to add a new item."
});

const item3 = new Item({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];                                 // create default items

// Home route
app.get("/", (req, res) => {
  // const day = date.getDate();                                            // simplify for adding MongoDB
  // const day = date.getDay();                                             // optional: to use getDay() instead of getDate()

  Item.find({}, (err, foundItems) => {                                      // find all items in DB
    //console.log(foundItems);
    if (foundItems.length === 0) {                                          // if no items in DB, insert default items
      Item.insertMany(defaultItems, (err) => {                              // insert default items
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully added default items to DB.");
        }
      });
      res.redirect("/");                                                    // redirect to home page
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems }); // render the list.ejs file with all variables
    }
  });
});

// POST route from form
app.post("/", (req, res) => {
  const itemName = req.body.newItem;                                        // get the new item from the form

  const item = new Item({                                                   // create new item
    name: itemName
  });

  item.save();                                                              // save item to DB

  res.redirect("/");                                                        // redirect to home page
});

// POST route from form to delete item
app.post("/delete", (req, res) => {
  const checkedItemId = (req.body.checkbox);

  Item.findByIdAndRemove(checkedItemId, (err) => {
    if (!err) {
      console.log("Successfully removed item from DB.");
      res.redirect("/")
    }
  });
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
