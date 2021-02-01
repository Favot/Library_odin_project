class Book {
  constructor(id, title, author, year, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;

    this.text_info = function () {
      return `${title} by ${author} (${year})`;
    };

    this.info_id = function () {
      return id;
    };

    this.read_info_to_s = function () {
      let read_info = this.read === true ? "Not Read" : "Read";
      return read_info;
    };

    this.read_info = function () {
      return this.read;
    };

    this.read_done = function () {
      this.read = true;
    };
    this.read_not_done = function () {
      this.read = false;
    };
  }
}

export { Book };
