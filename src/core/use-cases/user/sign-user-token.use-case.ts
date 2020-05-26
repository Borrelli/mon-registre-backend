import { ITokenService } from "../../ports/services/token.service";

export class SignUserToken {
  constructor(private tokenService: ITokenService) {}

  public execute(uid: string) {
    return this.tokenService.sign({ uid });
  }
}
