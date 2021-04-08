import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { ApolloError } from "apollo-server";
import { TransactionSchema } from "../../database/models/TransactionSchema";
import {
  TransactionType,
  TransactionCreateInput,
  TransactionListInput,
} from "./Transaction.type";

@Resolver()
export class TransactionResolver {
  public mTransactions: TransactionType[] = [];

  @Query((returns) => [TransactionType])
  public async transactions(@Arg("deviceId") deviceId: string) {
    const transactions = await TransactionSchema.find({
      deviceId,
    }).exec();
    return transactions;
  }

  @Mutation((returns) => TransactionType)
  public async createTransaction(
    @Arg("deviceId") transactionInput: TransactionCreateInput
  ) {
    const newTransaction = new TransactionSchema(transactionInput);
    await newTransaction.save();
    return newTransaction;
  }

  @Mutation((returns) => TransactionType)
  public async deleteTransaction(@Arg("transactionId") transactionId: string) {
    const transaction = await TransactionSchema.findByIdAndDelete(
      transactionId
    );
    if (!transaction) {
      throw new ApolloError("Transaction not found", "ENOTFOUND");
    }

    return transaction;
  }
}
