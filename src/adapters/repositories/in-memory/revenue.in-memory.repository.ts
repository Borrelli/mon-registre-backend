import { IRevenueRepository } from "../../../domains/ports/repositories/revenue.repository";
import { Revenue } from "../../../domains/entities/revenue.entity";

export class RevenueInMemoryRepository implements IRevenueRepository {
  private revenueList: Revenue[] = [
    new Revenue("uid2", new Date("2000-01-02"), {
      amountExcludingTax: 30,
      amountIncludingTax: 35,
      amountVAT: 5,
      customerId: "customer-id2",
      customerName: " customer-name2",
      paiementMethod: "Card",
      reference: "paiement-ref2",
    }),
    new Revenue("uid3", new Date("2000-01-03"), {
      amountExcludingTax: 30,
      amountIncludingTax: 35,
      amountVAT: 5,
      customerId: "customer-id3",
      customerName: " customer-name3",
      paiementMethod: "Card",
      reference: "paiement-ref3",
    }),
  ];

  public create(revenue: Revenue): Promise<Revenue[]> {
    return new Promise((resolve, reject) => {
      this.revenueList.push(revenue);
      resolve(this.revenueList);
    });
  }

  public findAll(): Promise<Revenue[]> {
    return new Promise((resolve, reject) => {
      resolve(this.revenueList);
    });
  }

  public findById(id: string): Promise<Revenue> {
    return new Promise((resolve, reject) => {
      resolve(this.revenueList.find((revenue) => revenue.uid === id));
    });
  }
}
