import { CreateRevenue } from "../../src/core/use-cases/revenue/create-revenue.use-case";
import { IRevenueRepository } from "../../src/core/ports/repositories/revenue.repository";
import { RevenueInMemoryRepository } from "../../src/adapters/secondary/repositories/in-memory/revenue.in-memory.repository";
import InMemoryUniqueIdentifierService from "../../src/adapters/secondary/services/in-memory/unique-identifier.in-memory.service";
import { FindRevenue } from "../../src/core/use-cases/revenue/find-revenue.use-case";
import InMemoryDateService from "../../src/adapters/secondary/services/in-memory/date.in-memory.service";
import { RemoveRevenue } from "../../src/core/use-cases/revenue/remove-revenue.use-case";
import { IRevenueEntityDTO } from "../../src/core/DTO/revenue.DTO";

describe("Revenue", () => {
  let revenueRepository: IRevenueRepository;
  let revenueId: string;
  let revenueDate: Date;

  describe("Create", () => {
    beforeEach(() => {
      revenueRepository = new RevenueInMemoryRepository();
      revenueId = new InMemoryUniqueIdentifierService().generate();
      revenueDate = new InMemoryDateService().generate();
    });

    it("should create a revenue", async () => {
      const revenue: IRevenueEntityDTO = {
        amountExcludingTax: 40,
        amountIncludingTax: 45,
        amountVAT: 5,
        userId: "user-id1",
        customerName: " customer-name1",
        paiementMethod: "Card",
        reference: "paiement-ref1",
      };

      const createRevenueResponse = await new CreateRevenue(revenueRepository, revenueId, revenueDate).execute(revenue);

      expect(createRevenueResponse).toEqual("ok");
    });
  });

  describe("Find", () => {
    beforeEach(() => {
      revenueRepository = new RevenueInMemoryRepository();
    });

    it("should find all revenues", async () => {
      const userId = "uid1";

      const findRevenueResponse = await new FindRevenue(revenueRepository).all(userId);

      expect(findRevenueResponse.length).toEqual(2);
    });

    it("should find a revenue", async () => {
      const revenueId = "uid2";

      const findRevenueResponse = await new FindRevenue(revenueRepository).byId(revenueId);

      if (findRevenueResponse) {
        expect(findRevenueResponse.uid).toEqual("uid2");
      }
    });
  });

  describe("Remove", () => {
    beforeEach(() => {
      revenueRepository = new RevenueInMemoryRepository();
    });

    it("should remove a revenue", async () => {
      const revenueId = "uid2";

      const removeRevenueResponse = await new RemoveRevenue(revenueRepository).execute(revenueId);

      expect(removeRevenueResponse).toEqual("ok");
    });

    it("should catch ko if revenue is not founded", async () => {
      const revenueId = "uid10";
      try {
        await new RemoveRevenue(revenueRepository).execute(revenueId);
      } catch (err) {
        expect(err).toEqual("ko");
      }
    });
  });
});
