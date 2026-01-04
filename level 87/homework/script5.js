class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  showTitle() {
    console.log(`The book title is '${this.title}'.`);
  }
}

const book1 = new Book("1984", "George Orwell");
book1.showTitle();
