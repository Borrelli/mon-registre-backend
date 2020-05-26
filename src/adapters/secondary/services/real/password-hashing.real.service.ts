import bcrypt from "bcrypt";
import crypto from "crypto";
import IPasswordHashingService from "../../../../core/ports/services/password-hashing.service";
import { CustomError } from "../../../../core/entities/custom-error.entity";

class RealPasswordHashingService implements IPasswordHashingService {
  public compare(password: string, comparedPassword: string): Promise<void> {
    return new Promise((resolve, reject) => {
      bcrypt
        .compare(password, comparedPassword)
        .then((isCorrect) => {
          if (isCorrect) {
            return resolve();
          }
          reject(new Error(CustomError.INVALID_PASSWORD));
        })
        .catch((err) => reject(err));
    });
  }

  public hash(password: string) {
    const salt = crypto.randomBytes(16).toString("base64");
    const hash = crypto.createHmac("sha512", salt).update(password).digest("base64");
    return salt + "$" + hash;
  }
}

export default RealPasswordHashingService;
