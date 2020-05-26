import { IUserRepository } from "../../src/core/ports/repositories/user.repository";
import { UserInMemoryRepository } from "../../src/adapters/secondary/repositories/in-memory/user.in-memory.repository";
import InMemoryUniqueIdentifierService from "../../src/adapters/secondary/services/in-memory/unique-identifier.in-memory.service";
import InMemoryDateService from "../../src/adapters/secondary/services/in-memory/date.in-memory.service";
import { CreateUser } from "../../src/core/use-cases/user/create-user.use-case";
import { RemoveUser } from "../../src/core/use-cases/user/remove-user.use-case";
import { IUserEntityDTO } from "../../src/core/DTO/user.DTO";
import { CustomError } from "../../src/core/entities/custom-error.entity";
import IPasswordHashingService from "../../src/core/ports/services/password-hashing.service";
import InMemoryPasswordHashingService from "../../src/adapters/secondary/services/in-memory/in-memory.password-hashing.service";
import { IUniqueIdentifierService } from "../../src/core/ports/services/unique-identifier.service";
import { IDateService } from "../../src/core/ports/services/date.service";

describe("TU User", () => {
  let userRepository: IUserRepository;
  let userId: IUniqueIdentifierService;
  let userDate: IDateService;
  let passwordHashingService: IPasswordHashingService;

  describe("Create", () => {
    beforeEach(() => {
      userRepository = new UserInMemoryRepository();
      userId = new InMemoryUniqueIdentifierService();
      userDate = new InMemoryDateService();
      passwordHashingService = new InMemoryPasswordHashingService();
    });

    it("should create a user", async () => {
      const user: IUserEntityDTO = {
        email: "email1@user.test",
        firstname: "firstname1",
        lastname: "lastname1",
        password: "password",
      };

      const createUserResponse = await new CreateUser(userRepository, userId, userDate, passwordHashingService).execute(
        user
      );

      expect(createUserResponse).toEqual("ok");
    });

    it("should return error if user email alrealy exist", async () => {
      const user: IUserEntityDTO = {
        email: "email2@user.test",
        firstname: "firstname1",
        lastname: "lastname1",
        password: "password",
      };

      try {
        await new CreateUser(userRepository, userId, userDate, passwordHashingService).execute(user);
        fail("test failed");
      } catch (err) {
        expect(err.message).toEqual(CustomError.USER_EXIST);
      }
    });

    it("should return error if email is not valid", async () => {
      const user: IUserEntityDTO = {
        email: "emailuser.test",
        firstname: "firstname1",
        lastname: "lastname1",
        password: "password",
      };

      try {
        await new CreateUser(userRepository, userId, userDate, passwordHashingService).execute(user);
        fail("test failed");
      } catch (err) {
        expect(err.message).toEqual(CustomError.INVALID_EMAIL);
      }
    });
  });

  describe("Remove", () => {
    beforeEach(() => {
      userRepository = new UserInMemoryRepository();
    });

    it("should remove a user", async () => {
      const userId = "uid2";

      const removeUserResponse = await new RemoveUser(userRepository).execute(userId);

      expect(removeUserResponse).toEqual("ok");
    });

    it("should catch ko if user is not founded", async () => {
      const userId = "uid10";
      try {
        await new RemoveUser(userRepository).execute(userId);
        fail("test failed");
      } catch (err) {
        expect(err).toEqual("ko");
      }
    });
  });
});
