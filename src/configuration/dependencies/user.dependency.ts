import RealUniqueIdentifierService from "../../adapters/secondary/services/real/unique-identifier.real.service";
import RealDateService from "../../adapters/secondary/services/real/date.real.service";
import { UserRealRepository } from "../../adapters/secondary/repositories/real/user.real.repository";
import { CreateUser } from "../../core/use-cases/user/create-user.use-case";
import RealTokenService from "../../adapters/secondary/services/real/token.real.service";

class UserDependency {
  private id = new RealUniqueIdentifierService().generate();
  private creationDate = new RealDateService().generate();
  private repository = new UserRealRepository();
  private tokenService = new RealTokenService();

  public create() {
    return new CreateUser(this.repository, this.id, this.creationDate);
  }
}

export default UserDependency;
