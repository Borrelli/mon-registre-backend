import { IRevenueRepository } from "../../ports/repositories/revenue.repository";

export class FindRevenue {
  constructor(private repository: IRevenueRepository) {}

  public all(userId: string) {
    return this.repository.findAll(userId);
  }

  public byId(revenueId: string) {
    return this.repository.findById(revenueId);
  }
}
