import mongoose, { Model, Document } from "mongoose";
import { IUserRepository } from "../../src/core/ports/repositories/user.repository";
import { UserRealRepository } from "../../src/adapters/secondary/repositories/real/user.real.repository";
import InMemoryUniqueIdentifierService from "../../src/adapters/secondary/services/in-memory/unique-identifier.in-memory.service";
import InMemoryDateService from "../../src/adapters/secondary/services/in-memory/date.in-memory.service";
import { IUserEntityDTO } from "../../src/core/DTO/user.DTO";
import { CreateUser } from "../../src/core/use-cases/user/create-user.use-case";
import UserModel from "../../src/adapters/secondary/repositories/real/models/user.models.real.repository";
import { CustomError } from "../../src/core/entities/custom-error.entity";
import IPasswordHashingService from "../../src/core/ports/services/password-hashing.service";
import InMemoryPasswordHashingService from "../../src/adapters/secondary/services/in-memory/in-memory.password-hashing.service";
import { IUniqueIdentifierService } from "../../src/core/ports/services/unique-identifier.service";
import { IDateService } from "../../src/core/ports/services/date.service";

const userData = [
  {
    email: "email@user.test",
  },
];

describe("TI User", () => {
  let userRepository: IUserRepository;
  let userId: IUniqueIdentifierService;
  let userDate: IDateService;
  let passwordHashingService: IPasswordHashingService;

  describe("Create", () => {
    beforeEach(async () => {
      const uri = "mongodb://localhost:27017/mon-registre-test";
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
      userRepository = new UserRealRepository();
      userId = new InMemoryUniqueIdentifierService();
      userDate = new InMemoryDateService();
      passwordHashingService = new InMemoryPasswordHashingService();
      await UserModel.remove({}).exec();
      await UserModel.insertMany(userData);
    });

    afterEach(async () => {
      await mongoose.disconnect();
    });

    it("should return error if user email alrealy exist", async () => {
      const user: IUserEntityDTO = {
        email: "email@user.test",
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
  });
});
