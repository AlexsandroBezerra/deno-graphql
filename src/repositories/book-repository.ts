import { Book } from '../models/book-model.ts';

export class BookRepository {
  private readonly books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }

  insert(title: string, author: string): Book {
    const book = new Book();

    book.id = crypto.randomUUID();
    book.title = title;
    book.author = author;

    this.books.push(book);

    return book;
  }
}
