import IPasswordHashingService from "../../../../core/ports/services/password-hashing.service";
import { CustomError } from "../../../../core/entities/custom-error.entity";

class InMemoryPasswordHashingService implements IPasswordHashingService {
  public compare(password: string, comparedPassword: string) {
    return new Promise((resolve, reject) => {
      if (password !== comparedPassword) {
        reject(new Error(CustomError.INVALID_PASSWORD));
      }
      resolve();
    });
  }

  public hash(password: string) {
    return `hash${password}hash`;
  }
}

export default InMemoryPasswordHashingService;
