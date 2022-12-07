import { Field, ObjectType } from 'npm:type-graphql@2.0.0-beta.1';

@ObjectType()
export class Book {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  author: string;
}
