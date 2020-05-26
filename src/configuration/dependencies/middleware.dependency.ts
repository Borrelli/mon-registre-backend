import { VerifyUserToken } from "../../core/use-cases/user/verify-user-token.use-case";
import RealTokenService from "../../adapters/secondary/services/real/token.real.service";

class MiddlewareDependency {
  private tokenService = new RealTokenService();

  public verifyToken() {
    return new VerifyUserToken(this.tokenService);
  }
}

export default MiddlewareDependency;
