const content = document.querySelector(".content");
const addBookButton = document.querySelector(".addbook-btn");
const overlay = document.querySelector(".overlay");
const bookFormDiv = document.querySelector(".book-form-div");
const submitBtn = document.querySelector(".submit-btn");
const bookTitleInput = document.querySelector("#book_title");
const bookAuthorInput = document.querySelector("#book_author");
const bookPagesInput = document.querySelector("#book_pages");
const bookReadInput = document.querySelector("#book_read");



class Library{
    constructor(){
        this.library = [];
    }

    displayLibrary(){
        content.innerHTML = "";
    
    
        for (let i = 0; i < this.library.length; i++) {
            let book = this.library[i];
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
    
    
            const readToggleBtn = document.createElement("button");
            readToggleBtn.textContent = book.read ? "Read" : "Not Read"; 
    
            const removeSelfBtn = document.createElement("button");
            removeSelfBtn.textContent = "Remove";
    
            removeSelfBtn.addEventListener("click", () => {
                this.removeBook(book);
            });
    
            readToggleBtn.addEventListener("click", () => {
                book.read = !book.read;
                myLibrary.displayLibrary();
            });
    
    
            bookCard.appendChild(readToggleBtn);
            bookCard.appendChild(removeSelfBtn);
            content.appendChild(bookCard);
        }
    }

    removeBook(book){
        for (let i = 0; i < this.library.length; i++){
            if (this.library[i].title == book.title){
                this.library.splice(i, 1);
            }
        }
        this.displayLibrary();
    }

    addBookToLibrary(book){
        this.library.push(book);
    }
}

class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


const myLibrary = new Library();



function formAddToLibrary(event){

    event.preventDefault();

    if (bookTitleInput.value == "" || bookAuthorInput.value == "" || bookPagesInput.value == ""){
        alert("Please fill all fields.")
        return
    }

    const bookTitle = document.querySelector("#book_title").value;
    const bookAuthor = document.querySelector("#book_author").value;
    const bookPages = document.querySelector("#book_pages").value;
    const bookRead = document.querySelector("#book_read").checked;

    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);

    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookPagesInput.value = "";
    bookReadInput.checked = false;

    overlay.classList.remove("active");
    bookFormDiv.classList.remove("active");

    myLibrary.addBookToLibrary(newBook);
    myLibrary.displayLibrary();
}

overlay.addEventListener("click", () =>{
    overlay.classList.remove("active");
    bookFormDiv.classList.remove("active");
})

addBookButton.addEventListener("click", () => {
    overlay.classList.toggle("active");
    bookFormDiv.classList.toggle("active");

})

submitBtn.addEventListener("click" , formAddToLibrary)



myLibrary.displayLibrary();