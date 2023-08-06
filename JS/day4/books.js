let books = [];

function addBook(title, author, year) {
  let book = {
    title: title,
    author: author,
    year: year
  };
  
  books.push(book);
}

function deleteBook(index) {
  books.splice(index, 1);
}

function displayBooks() {
  let bookList = document.getElementById('book-list');
  
  bookList.innerHTML = '';
  
  for(let i = 0; i < books.length; i++) {
    let bookItem = document.createElement('li');
    
    bookItem.textContent = books[i].title + ', ' + books[i].author + ', ' + books[i].year;
    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteBook(i);
      displayBooks();
    });
    
    bookItem.appendChild(deleteButton);
    bookList.appendChild(bookItem);
  }
}
