import { list, addBook, controller } from "./main.js";

class View {
  display(library) {
    library.forEach((element) => {
      console.log(`${element.info()}`);
    });
  }
  remove(event) {
    const liRemove = event.target.parentElement;
    liRemove.parentNode.removeChild(liRemove);
  }
  create(book) {
    // creat Element
    const li = document.createElement("li");
    const bookinfo = document.createElement("span");
    const updateBtn = document.createElement("span");
    const removeBtn = document.createElement("span");

    //add content
    removeBtn.textContent = "Delete";
    updateBtn.textContent = book.read_info_to_s();
    bookinfo.textContent = book.text_info();

    // add classes

    removeBtn.classList.add("delete");
    updateBtn.classList.add("read");
    book.read_info() === true
      ? bookinfo.classList.add("read-done")
      : bookinfo.classList.add("read-not-done");
    // append to li
    li.appendChild(bookinfo);
    li.appendChild(removeBtn);
    li.appendChild(updateBtn);
    // add id to li
    let id_number = controller.library.array_length();
    //  id_number - 1 is because we already append the array at this moment
    li.setAttribute("id", `${id_number - 1}`);

    // append to document
    list.appendChild(li);
    addBook.reset();
  }
  mask_element_read() {
    var element_id = document.querySelectorAll(".read-done");

    element_id.forEach((element) => {
      element.parentElement.style.display = "none";
    });
    // element_id.parentElement;
  }
  show_element_read() {
    var element_id = document.querySelectorAll(".read-done");

    element_id.forEach((element) => {
      element.parentElement.style.display = "list-item";
    });
    // element_id.parentElement;
  }
  mask_element_not_read() {
    var element_id = document.querySelectorAll(".read-not-done");

    element_id.forEach((element) => {
      element.parentElement.style.display = "none";
    });
    // element_id.parentElement;
  }
  show_element_not_read() {
    var element_id = document.querySelectorAll(".read-not-done");

    element_id.forEach((element) => {
      element.parentElement.style.display = "list-item";
    });
    // element_id.parentElement;
  }
  show_element_search(event) {
    const term = event.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(term) != -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  }
  display_panel(event) {
    const panels = document.querySelectorAll(".panel");
    if (event.target.tagName == "LI") {
      Array.from(panels).forEach((panel) => {
        var targetPanel = panel.classList;
        if (targetPanel.contains("active")) {
          event.target.textContent = "Add Book";
          panel.classList.remove("active");
        } else {
          panel.classList.add("active");
          event.target.textContent = "Close";
        }
      });
    }
  }
  updare_read(event) {
    var class_target = event.target.parentNode.firstChild;
    var text_update = event.target;

    if (class_target.className === "read-done") {
      class_target.className = "read-not-done";
      text_update.textContent = "Read";
    } else if (class_target.className === "read-not-done") {
      class_target.className = "read-done";
      text_update.textContent = "Not Read";
    }
  }
}

export { View };
