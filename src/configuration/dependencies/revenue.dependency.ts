import { FindRevenue } from "../../core/use-cases/revenue/find-revenue.use-case";
import { CreateRevenue } from "../../core/use-cases/revenue/create-revenue.use-case";
import RealUniqueIdentifierService from "../../adapters/secondary/services/real/unique-identifier.real.service";
import RealDateService from "../../adapters/secondary/services/real/date.real.service";
import { RevenueRealRepository } from "../../adapters/secondary/repositories/real/revenue.real.repository";

class RevenueDependency {
  private uniqueIdentifierService = new RealUniqueIdentifierService();
  private dateService = new RealDateService();
  private repository = new RevenueRealRepository();

  public create() {
    return new CreateRevenue(this.repository, this.uniqueIdentifierService, this.dateService);
  }
  public find() {
    return new FindRevenue(this.repository);
  }
}

export default RevenueDependency;
