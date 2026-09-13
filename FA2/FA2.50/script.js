class Book {
    #title;
    #author;
    #year;

    constructor(title, author, year) {
        this.#title = title;
        this.#author = author;
        this.#year = year;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get year() {
        return this.#year;
    }
}

class Library {
    #books = [];

    addBook(book) {
        this.#books.push(book);
    }

    getBooks() {
        return [...this.#books];
    }
}

const library = new Library();

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const yearInput = document.getElementById("yearInput");
const addBookButton = document.getElementById("addBookButton");
const bookList = document.getElementById("bookList");

function displayBooks() {
    bookList.replaceChildren();

    const books = library.getBooks();

    for (const book of books) {
        const paragraph = document.createElement("p");

        paragraph.textContent =
            `${book.title} by ${book.author}, published in ${book.year}`;

        bookList.appendChild(paragraph);
    }
}

function addBook() {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const yearText = yearInput.value.trim();

    if (title === "" || author === "" || yearText === "") {
        alert("Vui lòng nhập đầy đủ thông tin sách.");
        return;
    }

    const year = Number(yearText);

    if (!Number.isInteger(year) || year <= 0) {
        alert("Năm xuất bản phải là số nguyên dương.");
        return;
    }

    const book = new Book(title, author, year);

    library.addBook(book);
    displayBooks();

    titleInput.value = "";
    authorInput.value = "";
    yearInput.value = "";

    titleInput.focus();
}

addBookButton.addEventListener("click", addBook);