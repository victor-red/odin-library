const content = document.querySelector(".content");
const addBookButton = document.querySelector(".addbook-btn");
const overlay = document.querySelector(".overlay");
const bookFormDiv = document.querySelector(".book-form-div");
const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function displayLibrary(library){
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
    
        const bookTitle = document.createElement("h3");
        bookTitle.textContent = `Title : ${book.title}`;
        bookCard.appendChild(bookTitle);
    
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = `Author : ${book.author}`;
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement("p");
        bookPages.textContent = `Pages : ${book.pages} pages`;
        bookCard.appendChild(bookPages);
    
        const bookRead = document.createElement("p");
        bookRead.textContent = `${book.read}`;
        bookCard.appendChild(bookRead);

        content.appendChild(bookCard);
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

overlay.addEventListener("click", () =>{
    overlay.classList.remove("active");
    bookFormDiv.classList.remove("active");
})

addBookButton.addEventListener("click", () => {
    overlay.classList.toggle("active");
    bookFormDiv.classList.toggle("active");

})


const theHobbit = new Book("The Book", "J.R.R. Tolkien", "69592", "Read")

addBookToLibrary(theHobbit);
displayLibrary(myLibrary);
console.log(myLibrary[0])