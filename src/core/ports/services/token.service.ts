import { ITokenResponse } from "../../../adapters/secondary/services/real/token.real.service";

export interface ITokenService {
  sign(data: ITokenResponse): string;
  valide(authorization: string | undefined): ITokenResponse;
}
