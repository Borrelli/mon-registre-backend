import { FindRevenue } from "../../core/use-cases/revenue/find-revenue.use-case";
import { RevenueRealRepository } from "../../adapters/secondary/repositories/real/revenue.real.repository";
import { RevenueInMemoryRepository } from "../../adapters/secondary/repositories/in-memory/revenue.in-memory.repository";

class RevenueDependency {
  private repository = new RevenueInMemoryRepository();

  public find() {
    return new FindRevenue(this.repository);
  }
}

export default RevenueDependency;
