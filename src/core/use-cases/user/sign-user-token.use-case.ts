import { ITokenService } from "../../ports/services/token.service";

export class SignUserToken {
  constructor(private tokenService: ITokenService) {}

  public accessToken(uid: string) {
    return this.tokenService.signAccessToken({ uid });
  }

  public refreshToken(uid: string) {
    return this.tokenService.signRefreshToken({ uid });
  }
}
