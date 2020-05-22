import { Revenue } from "../../entities/revenue.entity";
import { IRevenueRepository } from "../../ports/repositories/revenue.repository";
import { RevenueMapper } from "../../mapper/revenue.mapper";
import { IRevenueEntityDTO } from "../../DTO/revenue.DTO";

export class CreateRevenue {
  constructor(private repository: IRevenueRepository, private revenueId: string, private revenueDate: Date) {}

  public execute(revenueProps: IRevenueEntityDTO) {
    const revenue = new Revenue(this.revenueId, this.revenueDate, revenueProps);
    return this.repository.create(RevenueMapper.toRepository(revenue));
  }
}
