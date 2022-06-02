<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/IsaiahSimon">
    <img src="https://github.com/IsaiahSimon/IsaiahSimon/blob/main/images/logo_500x500_dark.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Remembr</h3>

  <p align="center">
    Remembr is a full-stack todo list app!
    <br />
    <a href="https://github.com/IsaiahSimon/remembr"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://remembr-todo.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/IsaiahSimon/remembr/issues">Report Bug</a>
    ·
    <a href="https://github.com/IsaiahSimon/remembr/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://remembr-todo.herokuapp.com/)

Remembr is a full-stack ToDo list app that can dynamically generate additional custom lists.
- Add new items to a list by typing in the item, then clicking the "+" button or pressing ENTER on keyboard.
- Cross completed items off the list by clicking the checkbox next to it.
- To make a custom list:
  - add the custom list name to the end of URL in the browser.
  - /work, /gym, /shopping, etc...


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.dev/)
* [Express.js](https://expressjs.com/)
* [EJS](https://ejs.co/)
* [Mongoose](https://mongoosejs.com/)
* [MongoDB Atlas](https://www.mongodb.com/atlas)
* [Heroku](https://www.heroku.com/)
* [Lodash](https://lodash.com/)
* [JavaScript](https://www.javascript.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/IsaiahSimon/remembr.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Set up the project locally or use the [demo](https://remembr-todo.herokuapp.com/) of the fullstack app.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add a persistance layer using MongoDB Atlas
- [x] Deploy app on Heroku
- [ ] Improve navigation between pages
    - conflicts with the way custom lists are currently made by appending URL


See the [open issues](https://github.com/IsaiahSimon/remembr/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LESSONS LEARNED -->
## Lessons Learned

Gained a **LOT** from building this project, but I would say my biggest takeaway was learning how to deploy an app with a database using MongoDB Atlas.

MongoDB / MongoDB Atlas:
- SQL vs. NoSQL databases
- CRUD operations
- MongoDB shell (mongosh)
- MongoDB Native Driver vs. Mongoose

EJS:
- EJS tags (<%=, <% , <%-)
- reusable layouts (header and footer)
- Static websites vs Dynamic websites

Express.js:
- how Node Module Exports work by building my own custom module
- how to pass functions and data between files using Node Module Exports
- how to serve static files via a public folder

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@iSimonDev](https://twitter.com/iSimonDev) - isimon.dev@gmail.com

Project Link: [https://github.com/IsaiahSimon/remembr](https://github.com/IsaiahSimon/remembr)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Working with multiple Git remotes](https://jigarius.com/blog/multiple-git-remote-repositories)
* [Preparing a Codebase for Heroku Deployment](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment)
* [MongoDB CRUD Operations](https://www.mongodb.com/docs/manual/crud/)
* [Getting Started with Mongoose](https://mongoosejs.com/docs/index.html)
* [Mongoose API Docs](https://mongoosejs.com/docs/api.html)
* [Express routing](https://expressjs.com/en/guide/routing.html)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/IsaiahSimon/remembr.svg?style=for-the-badge
[contributors-url]: https://github.com/IsaiahSimon/remembr/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/IsaiahSimon/remembr.svg?style=for-the-badge
[forks-url]: https://github.com/IsaiahSimon/remembr/network/members
[stars-shield]: https://img.shields.io/github/stars/IsaiahSimon/remembr.svg?style=for-the-badge
[stars-url]: https://github.com/IsaiahSimon/remembr/stargazers
[issues-shield]: https://img.shields.io/github/issues/IsaiahSimon/remembr.svg?style=for-the-badge
[issues-url]: https://github.com/IsaiahSimon/remembr/issues
[license-shield]: https://img.shields.io/github/license/IsaiahSimon/remembr.svg?style=for-the-badge
[license-url]: https://github.com/IsaiahSimon/remembr/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/isaiahsimon101
[product-screenshot]: ./public/images/gifs-remembr-todo-list.gif