import { ITokenService } from "../../ports/services/token.service";

export class VerifyUserToken {
  constructor(private tokenService: ITokenService) {}

  public accessToken(authorization: string | undefined) {
    return this.tokenService.valideAccessToken(authorization);
  }

  public refreshToken(authorization: string | undefined) {
    return this.tokenService.valideRefreshToken(authorization);
  }
}
