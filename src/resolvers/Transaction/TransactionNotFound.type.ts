import { Field } from "type-graphql";

export class TransactionNotFound {
  @Field()
  code: number;

  @Field()
  message: string;
}
