import { Field, InputType } from "type-graphql";

@InputType()
export class TransactionUpdateInput {
  // @Field()
  // deviceId: string;
  // @Field()
  // id: string;
  @Field({ nullable: true })
  amount?: number;
  @Field({ nullable: true })
  title?: string;
  @Field({ nullable: true })
  type?: "deposit" | "withdraw";
  @Field({ nullable: true })
  category?: string;
}
