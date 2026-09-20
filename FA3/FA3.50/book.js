const _title = Symbol("title");
const _author = Symbol("author");
const _year = Symbol("year");

class Book {
    constructor(title, author, year) {
        this[_title] = title;
        this[_author] = author;
        this[_year] = year;
    }

    getTitle() {
        return this[_title];
    }

    getAuthor() {
        return this[_author];
    }

    getYear() {
        return this[_year];
    }
}

export default Book;