import { IUserRepository } from "../../src/core/ports/repositories/user.repository";
import { UserInMemoryRepository } from "../../src/adapters/secondary/repositories/in-memory/user.in-memory.repository";
import InMemoryUniqueIdentifierService from "../../src/adapters/secondary/services/in-memory/unique-identifier.in-memory.service";
import InMemoryDateService from "../../src/adapters/secondary/services/in-memory/date.in-memory.service";
import { IUserProps } from "../../src/core/entities/user.entity";
import { CreateUser } from "../../src/core/use-cases/user/create-user.use-case";
import { RemoveUser } from "../../src/core/use-cases/user/remove-user.use-case";

describe("User", () => {
  let userRepository: IUserRepository;
  let userId: string;
  let userDate: Date;

  describe("Create", () => {
    beforeEach(() => {
      userRepository = new UserInMemoryRepository();
      userId = new InMemoryUniqueIdentifierService().generate();
      userDate = new InMemoryDateService().generate();
    });

    it("should be able to create a user", async () => {
      const user: IUserProps = {
        email: "email@user.test1",
        firstname: "firstname1",
        lastname: "lastname1",
      };

      const createUserResponse = await new CreateUser(userRepository, userId, userDate).execute(user);

      expect(createUserResponse).toEqual("ok");
    });
  });

  describe("Remove", () => {
    beforeEach(() => {
      userRepository = new UserInMemoryRepository();
    });

    it("should be able to remove a user", async () => {
      const userId = "uid2";

      const removeUserResponse = await new RemoveUser(userRepository).execute(userId);

      expect(removeUserResponse).toEqual("ok");
    });

    it("should catch ko if user is not founded", async () => {
      const userId = "uid10";
      try {
        await new RemoveUser(userRepository).execute(userId);
      } catch (err) {
        expect(err).toEqual("ko");
      }
    });
  });
});
