import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { TransactionSchema } from "../../database/models/TransactionSchema";
import { TransactionType, TransactionInput } from "./TransactionType";

@Resolver()
export class TransactionResolver {
  public mTransactions: TransactionType[] = [];

  @Query((returns) => [TransactionType])
  public async transactions() {
    return this.mTransactions;
  }

  @Mutation((returns) => TransactionType)
  public async createTransaction(
    @Arg("input") transactionInput: TransactionInput
  ) {
    const newTransaction = new TransactionSchema(transactionInput);
    await newTransaction.save();
    return newTransaction;
  }
}
