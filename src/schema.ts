import { buildSchema } from 'npm:type-graphql@2.0.0-beta.1';
import { BookResolver } from './resolvers/book-resolver.ts';

export const schema = await buildSchema({
  resolvers: [BookResolver],
});
