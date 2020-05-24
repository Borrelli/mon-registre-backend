import mongoose, { Model, Document } from "mongoose";
import { IUserRepository } from "../../src/core/ports/repositories/user.repository";
import { UserRealRepository } from "../../src/adapters/secondary/repositories/real/user.real.repository";
import InMemoryUniqueIdentifierService from "../../src/adapters/secondary/services/in-memory/unique-identifier.in-memory.service";
import InMemoryDateService from "../../src/adapters/secondary/services/in-memory/date.in-memory.service";
import { IUserEntityDTO } from "../../src/core/DTO/user.DTO";
import { CreateUser } from "../../src/core/use-cases/user/create-user.use-case";
import UserModel from "../../src/adapters/secondary/repositories/real/models/user.models.real.repository";
import { CustomError } from "../../src/core/entities/custom-error.entity";

const userData = [
  {
    email: "email@user.test",
  },
];

describe("TI User", () => {
  let userRepository: IUserRepository;
  let userId: string;
  let userDate: Date;

  describe("Create", () => {
    beforeEach(async () => {
      const uri = "mongodb://localhost:27017/mon-registre-test";
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
      userRepository = new UserRealRepository();
      userId = new InMemoryUniqueIdentifierService().generate();
      userDate = new InMemoryDateService().generate();
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
      };

      try {
        await new CreateUser(userRepository, userId, userDate).execute(user);
        fail("test failed");
      } catch (err) {
        expect(err.message).toEqual(CustomError.USER_EXIST);
      }
    });
  });
});
