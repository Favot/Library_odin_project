class Library {
  constructor() {
    this.books = [];
    this.database;
  }

  array_length() {
    return this.books.length;
  }

  all() {
    return this.books;
  }

  add_book(book) {
    this.books.push(book);
  }

  remove_book(book_index) {
    // remove book from array
    for (var i = 0; i < this.books.length; i++) {
      if (this.books[i].id === book_index) {
        this.books.splice(i, 1);
        i--;
      }
    }
    // add connection to data base
  }
  update_read_status(event) {
    var array_index = event.target.parentElement.id;

    var book = this.books[array_index];

    if (book.read_info()) {
      book.read_not_done();
    } else {
      book.read_done();
    }
  }
}

export { Library };
