import { Revenue } from "../../entities/revenue.entity";
import { ISharedRepository } from "./shared.repository";

export interface IRevenueRepository extends ISharedRepository<Revenue> {
  findAll(userId: string): Promise<Revenue[]>;
  findById(id: string): Promise<Revenue | null>;
  removeById(id: string): Promise<any>;
}
