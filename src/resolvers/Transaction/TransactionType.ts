import { Field, InputType, ObjectType } from "type-graphql";

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
}

@InputType()
export class TransactionCreateInput {
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
}
@InputType()
export class TransactionListInput {
  @Field()
  deviceId: string;
}
