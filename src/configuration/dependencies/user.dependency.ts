import RealUniqueIdentifierService from "../../adapters/secondary/services/real/unique-identifier.real.service";
import RealDateService from "../../adapters/secondary/services/real/date.real.service";
import { UserRealRepository } from "../../adapters/secondary/repositories/real/user.real.repository";
import { CreateUser } from "../../core/use-cases/user/create-user.use-case";
import RealTokenService from "../../adapters/secondary/services/real/token.real.service";
import RealPasswordHashingService from "../../adapters/secondary/services/real/password-hashing.real.service";

class UserDependency {
  private uniqueIdentifierService = new RealUniqueIdentifierService();
  private dateService = new RealDateService();
  private repository = new UserRealRepository();
  private passwordHashingService = new RealPasswordHashingService();

  public create() {
    return new CreateUser(this.repository, this.uniqueIdentifierService, this.dateService, this.passwordHashingService);
  }
}

export default UserDependency;
