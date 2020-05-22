import { IRevenueRepository } from "../../../../core/ports/repositories/revenue.repository";
import { Revenue } from "../../../../core/entities/revenue.entity";
import RevenueModel from "./models/revenue.models.real.repository";

export class RevenueRealRepository implements IRevenueRepository {
  findAll(userId: string): Promise<Revenue[]> {
    return RevenueModel.find({ userId }).exec();
  }
  findById(id: string): Promise<Revenue | null> {
    return RevenueModel.findOne({ uid: id }).exec();
  }
  removeById(id: string): Promise<any> {
    return RevenueModel.findOneAndDelete({ uid: id }).exec();
  }
  create(revenue: Revenue): Promise<any> {
    return new RevenueModel(revenue).save();
  }
}
