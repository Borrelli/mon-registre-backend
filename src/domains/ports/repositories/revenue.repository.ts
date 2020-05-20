import { Revenue } from "../../entities/revenue.entity";

export interface IRevenueRepository {
  create(revenue: Revenue): Promise<Revenue[]>;
  findAll(): Promise<Revenue[]>;
  findById(id: string): Promise<Revenue>;
}
