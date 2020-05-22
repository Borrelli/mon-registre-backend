import { IRevenueRepositoryDTO } from "../DTO/revenue.DTO";
import { Revenue } from "../entities/revenue.entity";

export class RevenueMapper {
  public static toRepository(revenue: Revenue): IRevenueRepositoryDTO {
    return {
      uid: revenue.uid,
      creationDate: revenue.creationDate,
      reference: revenue.reference,
      customerName: revenue.customerName,
      userId: revenue.userId,
      amountExcludingTax: revenue.amountExcludingTax,
      amountIncludingTax: revenue.amountIncludingTax,
      amountVAT: revenue.amountVAT,
      paiementMethod: revenue.paiementMethod,
    };
  }
}
