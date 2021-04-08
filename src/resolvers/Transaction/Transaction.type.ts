import { createUnionType, Field, ObjectType } from "type-graphql";
import { TransactionNotFound } from "./TransactionNotFound.type";
@ObjectType()
export class TransactionType {
  @Field()
  id: string;

  @Field()
  deviceId: string;

  @Field()
  amount: number;

  @Field()
  title: string;

  @Field()
  type: "deposit" | "withdraw";

  @Field()
  category: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

export const TransactionResult = createUnionType({
  name: "TransactionResult",
  types: () => [TransactionType, TransactionNotFound],
  resolveType: (value) => {
    return "id" in value ? TransactionType : TransactionNotFound;
  },
});
