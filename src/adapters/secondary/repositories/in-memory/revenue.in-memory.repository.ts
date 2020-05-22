import { IRevenueRepository } from "../../../../core/ports/repositories/revenue.repository";
import { Revenue } from "../../../../core/entities/revenue.entity";
import { IRevenueRepositoryDTO } from "../../../../core/DTO/revenue.DTO";

export class RevenueInMemoryRepository implements IRevenueRepository {
  private revenueList: IRevenueRepositoryDTO[] = [
    new Revenue("uid2", new Date("2000-01-02"), {
      amountExcludingTax: 30,
      amountIncludingTax: 35,
      amountVAT: 5,
      userId: "uid1",
      customerName: " customer-name2",
      paiementMethod: "Card",
      reference: "paiement-ref2",
    }),
    new Revenue("uid3", new Date("2000-01-03"), {
      amountExcludingTax: 30,
      amountIncludingTax: 35,
      amountVAT: 5,
      userId: "uid1",
      customerName: " customer-name3",
      paiementMethod: "Card",
      reference: "paiement-ref3",
    }),
    new Revenue("uid3", new Date("2000-01-03"), {
      amountExcludingTax: 30,
      amountIncludingTax: 35,
      amountVAT: 5,
      userId: "uid2",
      customerName: " customer-name3",
      paiementMethod: "Card",
      reference: "paiement-ref3",
    }),
  ];

  public create(revenue: Revenue): Promise<"ok" | "ko"> {
    return new Promise((resolve, reject) => {
      this.revenueList.push(revenue);
      resolve("ok");
    });
  }

  public findAll(userId: string): Promise<IRevenueRepositoryDTO[]> {
    return new Promise((resolve, reject) => {
      resolve(this.revenueList.filter((revenue) => revenue.userId === userId));
    });
  }

  public findById(id: string): Promise<IRevenueRepositoryDTO> {
    return new Promise((resolve, reject) => {
      resolve(this.revenueList.find((revenue) => revenue.uid === id));
    });
  }

  public removeById(id: string): Promise<"ok" | "ko"> {
    return new Promise((resolve, reject) => {
      const index = this.revenueList.findIndex((revenue) => revenue.uid === id);
      if (index === -1) {
        reject("ko");
      }
      this.revenueList.splice(index, 1);
      resolve("ok");
    });
  }
}
