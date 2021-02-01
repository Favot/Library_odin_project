import { Controller } from "./controler.js";

const controller = new Controller();

// event listener for the delete and read btn
var list = document.querySelector("#book-list ul");

list.addEventListener("click", function (event) {
  if (event.target.className === "delete") {
    controller.destroy(event);
  } else if (event.target.className === "read") {
    controller.updare_read(event);
  }
});

// event listener for the add book form
const addBook = document.forms["add-book"];

addBook.addEventListener("submit", function (event) {
  event.preventDefault();
  controller.creat(event, list);
});

// event listener for hide book if already read of not

// book alredy read
const hideBox_read = document.querySelector("#hide-book-read");

hideBox_read.addEventListener("change", function (event) {
  event.preventDefault();
  if (hideBox_read.checked) {
    controller.hide_book_read();
  } else {
    controller.show_book_read();
  }
});

// book not read yet
const hideBox_not_read = document.querySelector("#hide-book-not-read");

hideBox_not_read.addEventListener("change", function (event) {
  event.preventDefault();
  if (hideBox_not_read.checked) {
    controller.hide_book_not_read();
  } else {
    controller.show_book_not_read();
  }
});

//  search for book

const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", (event) => {
  event.preventDefault();
  controller.search(event);
});

// tabbed content
const tabs = document.querySelector(".tabs");

tabs.addEventListener("click", (event) => {
  event.preventDefault();
  controller.add_book_panel(event);
});

export { list, addBook, controller };
