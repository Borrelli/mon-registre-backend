import { VerifyUserToken } from "../../core/use-cases/user/verify-user-token.use-case";
import RealTokenService from "../../adapters/secondary/services/real/token.real.service";
import { SignUserToken } from "../../core/use-cases/user/sign-user-token.use-case";

class MiddlewareDependency {
  private tokenService = new RealTokenService();

  public verifyToken() {
    return new VerifyUserToken(this.tokenService);
  }

  public signToken() {
    return new SignUserToken(this.tokenService);
  }
}

export default MiddlewareDependency;
