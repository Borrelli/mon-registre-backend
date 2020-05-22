import { IRevenueRepository } from "../../../../core/ports/repositories/revenue.repository";
import { Revenue } from "../../../../core/entities/revenue.entity";
import RevenueModel, { RevenueSchema } from "./models/revenue.models.real.repository";

export class RevenueRealRepository implements IRevenueRepository {
  findAll(userId: string): Promise<RevenueSchema[]> {
    return RevenueModel.find({ userId }).exec();
  }
  findById(id: string): Promise<RevenueSchema | null> {
    return RevenueModel.findOne({ uid: id }).exec();
  }
  removeById(id: string): Promise<RevenueSchema | null> {
    return RevenueModel.findOneAndDelete({ uid: id }).exec();
  }
  create(revenue: Revenue): Promise<RevenueSchema> {
    return new RevenueModel(revenue).save();
  }
}
