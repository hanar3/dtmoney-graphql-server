import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { TransactionSchema } from "../../database/models/TransactionSchema";
import {
  TransactionType,
  TransactionCreateInput,
  TransactionListInput,
} from "./TransactionType";

@Resolver()
export class TransactionResolver {
  public mTransactions: TransactionType[] = [];

  @Query((returns) => [TransactionType])
  public async transactions(@Arg("input") input: TransactionListInput) {
    const transactions = await TransactionSchema.find({
      deviceId: input.deviceId,
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
}
