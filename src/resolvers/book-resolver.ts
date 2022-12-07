import { Arg, Mutation, Query, Resolver } from 'npm:type-graphql@2.0.0-beta.1';

import { Book } from '../models/book-model.ts';
import { BookRepository } from '../repositories/book-repository.ts';

@Resolver(Book)
export class BookResolver {
  private readonly bookRepository = new BookRepository();

  @Query(() => [Book])
  books(): Book[] {
    return this.bookRepository.findAll();
  }

  @Mutation(() => Book)
  createBook(
    @Arg('title', () => String) title: string,
    @Arg('author', () => String) author: string,
  ): Book {
    const book = this.bookRepository.insert(title, author);

    return book;
  }
}
