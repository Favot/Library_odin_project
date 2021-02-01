import { Book } from "./book.js";

import { Library } from "./library.js";

import { View } from "./view.js";

class Controller {
  constructor() {
    this.library = new Library();
    this.view = new View();
  }
  list() {
    // display all recipie with the view after call the library
    book = this.library.all;

    this.view.display(book);
  }
  creat(event, list) {
    //  1. Get name and author year and if he alredy read it form the user by fetch this info from the view
    var id = this.library.array_length();
    var author = event.target[0].value;
    var title = event.target[1].value;
    var year = event.target[2].value;
    let read = event.target[3].checked === true ? true : false;

    //  2. Create new book
    var book = new Book(id, title, author, year, read);
    //  3. Add to repo library
    this.library.add_book(book);
    //  4. Creat the book view
    this.view.create(book);
  }
  destroy(event) {
    // # remove an existing book
    // # 1 if user hit the delete btn for a book remove it at from the view
    this.view.remove(event);
    // # 3. Remove from repo / library
    var index = parseInt(event.target.parentElement.id);
    // remove to the library(index);
    this.library.remove_book(index);
  }
  updare_read(event) {
    // #  1 update the object book true or false in the library
    this.library.update_read_status(event);
    // 2. update the view
    this.view.updare_read(event);
  }
  hide_book_read() {
    // query the book id in the object array for all the book alread
    // push into array and transfere to the view
    // var buffer_array = this.library.all();
    // var selection_send_at_the_view = [];
    // buffer_array.forEach((element) => {
    //   element.read === true ? selection_send_at_the_view.push(element) : null;
    // });
    this.view.mask_element_read();
  }
  show_book_read() {
    this.view.show_element_read();
  }
  hide_book_not_read() {
    // query the book id in the object array for all the book alread
    // push into array and transfere to the view
    // var buffer_array = this.library.all();
    // var selection_send_at_the_view = [];
    // buffer_array.forEach((element) => {
    //   element.read === true ? selection_send_at_the_view.push(element) : null;
    // });
    this.view.mask_element_not_read();
  }
  show_book_not_read() {
    this.view.show_element_not_read();
  }
  search(event) {
    this.view.show_element_search(event);
  }
  add_book_panel(event) {
    this.view.display_panel(event);
  }
}

export { Controller };
