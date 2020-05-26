import { ITokenService } from "../../ports/services/token.service";

export class VerifyUserToken {
  constructor(private tokenService: ITokenService) {}

  public execute(authorization: string | undefined) {
    return this.tokenService.valide(authorization);
  }
}
