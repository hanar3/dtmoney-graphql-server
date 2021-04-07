import { Resolver, Query } from "type-graphql";
import { TransactionType } from "./TransactionType";

@Resolver()
export class TransactionResolver {
  public mTransactions: TransactionType[] = [];

  @Query((returns) => [TransactionType])
  public async transactions() {
    return this.mTransactions;
  }
}
