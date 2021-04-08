import { Resolver, Query, Mutation, Arg } from "type-graphql";

import { TransactionSchema } from "../../database/models/TransactionSchema";
import { TransactionType, TransactionResult } from "./Transaction.type";
import { TransactionCreateInput } from "./TransactionCreate.input";
import { TransactionNotFound } from "./TransactionNotFound.type";
import { TransactionUpdateInput } from "./TransactionUpdate.input";
@Resolver()
export class TransactionResolver {
  @Query((returns) => [TransactionType])
  public async transactions(@Arg("deviceId") deviceId: string) {
    const transactions = await TransactionSchema.find({
      deviceId,
    }).exec();
    return transactions;
  }

  @Mutation((returns) => TransactionType)
  public async createTransaction(
    @Arg("input") transactionInput: TransactionCreateInput
  ) {
    const newTransaction = new TransactionSchema(transactionInput);
    await newTransaction.save();
    return newTransaction;
  }

  @Mutation((returns) => TransactionResult)
  public async deleteTransaction(@Arg("transactionId") transactionId: string) {
    const transaction = await TransactionSchema.findByIdAndDelete(
      transactionId
    );
    if (!transaction) {
      return new TransactionNotFound();
    }

    return transaction;
  }

  @Mutation((returns) => TransactionResult)
  public async updateTransaction(
    @Arg("id")
    transactionId: string,
    @Arg("updateFields")
    transactionUpdate: TransactionUpdateInput
  ) {
    const transaction:
      | TransactionType
      | undefined = await TransactionSchema.findByIdAndUpdate(
      { _id: transactionId },
      { ...transactionUpdate }
    );

    if (!transaction) {
      return new TransactionNotFound();
    }

    return transaction;
  }
}
