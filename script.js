let modal = document.getElementById('modal');
let addBook = document.getElementById("add-book");
let submitBook = document.getElementById('submit-book');
let generic_book;
let myForm;
let myLibrary = [];
let middleContainer = document.querySelector('.mid-container');


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
    this.change_status = function (generic_book) {
      if(myLibrary[myLibrary.indexOf(generic_book)].book_status == "READ ALREADY"){
        myLibrary[myLibrary.indexOf(generic_book)].book_status = "NOT READ YET";
      } else {
        myLibrary[myLibrary.indexOf(generic_book)].book_status = "READ ALREADY";  
      }
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
    bookMaker(generic_book);
  });
};

function bookMaker (generic_book) {
  let book_container = document.createElement('div');
  book_container.classList.add('book-container');
  let btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  let book_title = document.createElement('p');
  let book_author = document.createElement('p');
  let book_pages = document.createElement('p');
  let book_status = document.createElement('p');
  let book_category = document.createElement('p');
  let changeBtn = document.createElement('button');
  let deleteBtn = document.createElement('button');
  book_title.textContent = `Title: ${myLibrary[myLibrary.length - 1].book_title}`;
  book_author.textContent = `Author: ${myLibrary[myLibrary.length - 1].book_author}`;
  book_pages.textContent = `Page number: ${myLibrary[myLibrary.length - 1].book_pages}`;
  book_status.textContent = `Book status: ${myLibrary[myLibrary.length - 1].book_status}`;
  book_category.textContent = `Book category: ${myLibrary[myLibrary.length - 1].book_category}`;
  changeBtn.textContent = 'Change Status';
  deleteBtn.textContent = 'Delete Book';
  btnContainer.append(changeBtn, deleteBtn);
  book_container.append(book_title, book_author, book_pages, book_status, book_category, btnContainer);
  middleContainer.append(book_container);

  console.log(myLibrary);
  
  changeBtn.addEventListener('click', () => {
    generic_book.change_status(generic_book);
    book_status.textContent = `Book status ${generic_book.book_status}`;
    book_container.insertBefore(book_status, book_category);
  });

  deleteBtn.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(generic_book), 1);
    book_container.remove();
  });
};

addBookLibrary();