import { Revenue } from "../../entities/revenue.entity";
import { ISharedRepository } from "./shared.repository";
import { IRevenueRepositoryDTO } from "../../DTO/revenue.DTO";

export interface IRevenueRepository extends ISharedRepository<IRevenueRepositoryDTO> {
  findAll(userId: string): Promise<any[]>;
  findById(id: string): Promise<any>;
  removeById(id: string): Promise<any>;
}
