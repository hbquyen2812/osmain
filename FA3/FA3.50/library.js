import Book from "./book.js";

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
        }
    }

    *getBooks() {
        for (const book of this.books) {
            yield book;
        }
    }

    [Symbol.iterator]() {
        return this.getBooks();
    }
}

export default Library;