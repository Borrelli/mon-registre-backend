import { IRevenueRepository } from "../ports/repositories/revenue.repository";

export class FindRevenue {
  constructor(private repository: IRevenueRepository) {}

  public all() {
    return this.repository.findAll();
  }

  public byId(revenueId: string) {
    return this.repository.findById(revenueId);
  }
}
