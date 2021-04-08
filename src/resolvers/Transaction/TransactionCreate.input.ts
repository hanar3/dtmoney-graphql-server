import { Field, InputType } from "type-graphql";

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
