import { Revenue } from "../../entities/revenue.entity";
import { IRevenueRepository } from "../../ports/repositories/revenue.repository";
import { RevenueMapper } from "../../mapper/revenue.mapper";
import { IRevenueDTO } from "../../DTO/revenue.DTO";
import { IUniqueIdentifierService } from "../../ports/services/unique-identifier.service";
import { IDateService } from "../../ports/services/date.service";

export class CreateRevenue {
  constructor(
    private repository: IRevenueRepository,
    private uniqueIdentifierService: IUniqueIdentifierService,
    private dateService: IDateService
  ) {}

  public execute(revenueProps: IRevenueDTO, userId: string) {
    revenueProps.userId = userId;
    const revenue = new Revenue(this.uniqueIdentifierService.generate(), this.dateService.generate(), revenueProps);
    return this.repository.create(RevenueMapper.toRepository(revenue));
  }
}
