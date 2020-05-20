import { Revenue, IRevenueProps } from "../entities/revenue.entity";
import { IRevenueRepository } from "../ports/repositories/revenue.repository";

export class CreateRevenue {
  constructor(private repository: IRevenueRepository, private revenueId: string, private revenueDate: Date) {}

  public execute(revenueProps: IRevenueProps) {
    const revenue = new Revenue(this.revenueId, this.revenueDate, revenueProps);
    return this.repository.create(revenue);
  }
}
