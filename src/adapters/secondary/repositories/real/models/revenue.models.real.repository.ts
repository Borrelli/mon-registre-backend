import mongoose, { Document, Model } from "mongoose";
import { Revenue } from "../../../../../core/entities/revenue.entity";

type RevenueSchema = Document & Revenue;

const revenueSchema = new mongoose.Schema({
  uid: String,
  reference: String,
  customerName: String,
  userId: String,
  amountExcludingTax: Number,
  amountIncludingTax: Number,
  amountVAT: Number,
  paiementMethod: String,
});

const RevenueModel: Model<RevenueSchema> = mongoose.model<RevenueSchema>("Revenues", revenueSchema);

export default RevenueModel;
