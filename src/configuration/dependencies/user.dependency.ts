import RealUniqueIdentifierService from "../../adapters/secondary/services/real/unique-identifier.real.service";
import RealDateService from "../../adapters/secondary/services/real/date.real.service";
import { UserRealRepository } from "../../adapters/secondary/repositories/real/user.real.repository";
import { CreateUser } from "../../core/use-cases/user/create-user.use-case";

class UserDependency {
  private id = new RealUniqueIdentifierService().generate();
  private creationDate = new RealDateService().generate();
  private repository = new UserRealRepository();

  public create() {
    return new CreateUser(this.repository, this.id, this.creationDate);
  }
}

export default UserDependency;
