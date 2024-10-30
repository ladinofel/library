let modal = document.getElementById('modal');
let addBook = document.getElementById("add-book");
let submitBook = document.getElementById('submit-book');
let generic_book;
let myForm;
let myLibrary = [];


addBook.addEventListener('click', () => {
  modal.showModal();
});

class Book {
  constructor(book_title, book_author, book_pages, book_status, book_category){
    this.book_title = book_title;
    this.book_author = book_author;
    this.book_pages = book_pages;
    this.book_status = book_status;
    this.book_category = book_category;
  };

  change_status() {
    if(myLibrary[myLibrary.indexOf(generic_book)].book_status =='READ ALREADY'){
      myLibrary[myLibrary.indexOf(generic_book)].book_status = 'NOT READ YET';
    } else {
      myLibrary[myLibrary.indexOf(generic_book)].book_status = 'READ ALREADY';
    };
  };
};

function addBookLibrary () {
  submitBook.addEventListener('click', () => {
    let book_title = document.getElementById('book-title').value;
    let book_author = document.getElementById('book-author').value;
    let book_pages = document.getElementById('book-pages').value;
    let book_status = document.querySelector('input[name="book-status"]:checked').value;
    let book_category = document.getElementById('book-category').value;
    generic_book = new Book(book_title, book_author, book_pages, book_status, book_category);
    myLibrary.push(generic_book);
    myForm = document.getElementById('myForm').reset();
    modal.close();
    console.log(myLibrary);
  });
};


addBookLibrary();