import { ITokenPayload } from "../../../adapters/secondary/services/real/token.real.service";
import { Token } from "../../entities/token.entity";

export interface ITokenService {
  signAccessToken(payload: ITokenPayload): Token;
  signRefreshToken(payload: ITokenPayload): Token;
  valideAccessToken(authorization: string | undefined): ITokenPayload;
  valideRefreshToken(authorization: string | undefined): ITokenPayload;
}
