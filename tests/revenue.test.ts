import { CreateRevenue } from "../src/domains/use-cases/create-revenue.use-case";
import { IRevenueRepository } from "../src/domains/ports/repositories/revenue.repository";
import { RevenueInMemoryRepository } from "../src/adapters/repositories/in-memory/revenue.in-memory.repository";
import InMemoryUniqueIdentifierService from "../src/adapters/services/in-memory/unique-identifier.in-memory.service";
import { FindRevenue } from "../src/domains/use-cases/find-revenue.use-case";
import InMemoryDateService from "../src/adapters/services/in-memory/date.in-memory.service";
import { IRevenueProps } from "../src/domains/entities/revenue.entity";
import { RemoveRevenue } from "../src/domains/use-cases/remove-revenue.use-case";

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

    it("should be able to create a revenue", async () => {
      const revenue: IRevenueProps = {
        amountExcludingTax: 40,
        amountIncludingTax: 45,
        amountVAT: 5,
        customerId: "customer-id1",
        customerName: " customer-name1",
        paiementMethod: "Card",
        reference: "paiement-ref1",
      };

      const createRevenueResponse = await new CreateRevenue(revenueRepository, revenueId, revenueDate).execute(revenue);

      expect(createRevenueResponse.length).toEqual(3);
    });
  });

  describe("Find", () => {
    beforeEach(() => {
      revenueRepository = new RevenueInMemoryRepository();
    });

    it("should be able to find all revenues", async () => {
      const findRevenueResponse = await new FindRevenue(revenueRepository).all();

      expect(findRevenueResponse.length).toEqual(2);
    });

    it("should be able to find a revenue", async () => {
      const revenueId = "uid2";

      const findRevenueResponse = await new FindRevenue(revenueRepository).byId(revenueId);

      expect(findRevenueResponse.uid).toEqual("uid2");
    });
  });

  describe("Remove", () => {
    beforeEach(() => {
      revenueRepository = new RevenueInMemoryRepository();
    });

    it("should be able to remove a revenue", async () => {
      const revenueId = "uid2";

      const removeRevenueResponse = await new RemoveRevenue(revenueRepository).execute(revenueId);

      expect(removeRevenueResponse.length).toEqual(1);
    });
  });
});
