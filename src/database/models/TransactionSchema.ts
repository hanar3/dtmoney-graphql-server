import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    deviceId: { type: String, required: true },
    title: { type: String, default: "Untitled Transaction" },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const TransactionSchema = mongoose.model("Transaction", schema);
