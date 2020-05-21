import { IRevenueRepository } from "../../ports/repositories/revenue.repository";

export class RemoveRevenue {
  constructor(private repository: IRevenueRepository) {}

  public execute(revenueId: string) {
    return this.repository.removeById(revenueId);
  }
}
