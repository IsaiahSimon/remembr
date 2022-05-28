# Remembr
Remembr is a full-stack ToDo list web app.

**Link to project:** https://github.com/IsaiahSimon/remembr

## How It's Made:
### Client:
**Tech used:** HTML, CSS, JavaScript

The Express server first renders the page to the client, and it is styled with static CSS.

The user can add additional items to the ToDo list, and the "+" button triggers a post to the server's home route. The user may also visit a separate "Work" todo list or an "About" page by manually changing the url (need to add nav buttons).

### Server:
**Tech used:** JavaScript, Express.js, EJS

*Why was this stack chosen?*

Node is a pretty lightweight server choice and can be spun up fairly easily.

The Express server renders the all pages using EJS templating and listens for form submissions. When triggered, it then posts the data for a new list item via the home route. The list is updated and the page is re-rendered to the user.

## Lessons Learned:
Learned a **LOT** from building this project, but I would say my biggest takeaway was learning how to use EJS for templating and layouts. I also learned a bit about how Node Module Exports worked by building my own custom module. There is still much room for improvement with this project, and I'll consider this version 1 for now.

EJS:
- How to use EJS tags (<%=, <% , <%-)to embed basic control flow into html
- How to create reusable layouts (header and footer)
- Static websites vs Dynamic websites

Express.js:
- How to pass functions and data between files using Node Module Exports
- How to serve static files via a public folder

## Improvement:
- Add navigation between pages (Home, Worklist, About)
- Add a database (Mongodb with Mongoose)