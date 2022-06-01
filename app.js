const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const _ = require("lodash");
const dotenv = require("dotenv").config();
const DB_PWD = process.env.DB_PWD;

//const date = require(__dirname + "/date.js");                             // simplify for adding MongoDB

const app = express();

app.set("view engine", "ejs");                                              // set up ejs for templating

app.use(bodyParser.urlencoded({ extended: true }));                         // parse form data client side
app.use(express.static("public"));                                          // set up static files folder

mongoose.connect(`mongodb+srv://isimondev:${DB_PWD}@cluster0.cow7c.mongodb.net/todolistDB`, { useNewUrlParser: true }); // connect to mongodb

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

const listSchema = new Schema({                                             // create schema for lists
  name: String,
  items: [itemsSchema]                                                      // items is an array of itemsSchema
});

const List = mongoose.model("List", listSchema);                            // create model for lists

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

// Create dynamic lists using Express route parameters
app.get("/:customListName", (req, res) => {
  const customListName = _.capitalize(req.params.customListName);                       // get custom list name from URL

  List.findOne({name: customListName}, (err, foundList) => {             // find list in DB));
    if (!err) {
      if (!foundList) {
        // Create new list
        const list = new List({
          name: customListName,                                                 // set name of list to custom list name
          items: defaultItems                                                   // set items to default items
        });

        list.save();
        res.redirect("/" + customListName);                                     // redirect to custom list
      } else {
        // Show existing list
        res.render("list", { listTitle: foundList.name, newListItems: foundList.items }); // render the list.ejs file with all variables
      }
    }
  });


});

// POST route from form
app.post("/", (req, res) => {
  const itemName = req.body.newItem;                                        // get the new item from the form
  const listName = req.body.list;                                          // get the list name from the form

  const item = new Item({                                                   // create new item
    name: itemName
  });

  if (listName === "Today") {                                              // if list is Today, insert item into DB
    item.save();                                                              // save item to DB
    res.redirect("/");                                                        // redirect to home page
  } else {
    List.findOne({name: listName}, (err, foundList) => {                     // find list in DB
      foundList.items.push(item);                                             // push item into list items array
      foundList.save();                                                       // save list to DB
      res.redirect("/" + listName);                                           // redirect to custom list
    });
  }
});

// POST route from form to delete item
app.post("/delete", (req, res) => {
  const checkedItemId = (req.body.checkbox);
  const listName = req.body.listName;                                      // get the list name from the form

  // Check if list is Today or custom list
  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId, (err) => {
      if (!err) {
        console.log("Successfully removed item from DB.");
        res.redirect("/")
      }
    });
  } else {
    // findOneAndUpdate({conditions}, {updates}, callback)
    // findOneAndUpdate({conditions}, {$pull: {field}: {query}}}, callback)
    // findOneAndUpdate({conditions}, {$pull: {field}: {_id: value}}}, callback)
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, (err, foundList) => {
      if (!err) {
        res.redirect("/" + listName);
      }
    });
  }
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
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => console.log(`Server started on port ${port}.`));
