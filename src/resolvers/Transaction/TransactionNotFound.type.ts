import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class TransactionNotFound {
  @Field()
  code: number = 404;

  @Field()
  message: string = "Transaction not found";
}
