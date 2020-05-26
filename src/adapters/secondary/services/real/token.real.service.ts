import { ITokenService } from "../../../../core/ports/services/token.service";
import jwt from "jsonwebtoken";
import { tokenConfiguration } from "../../../../configuration/env.configuration";
import { CustomError } from "../../../../core/entities/custom-error.entity";

export interface ITokenResponse {
  uid: string;
}

export default class RealTokenService implements ITokenService {
  constructor() {}

  public sign(data: ITokenResponse) {
    return jwt.sign(data, tokenConfiguration.JWT_SECRET);
  }

  public valide(authorization: string | undefined): ITokenResponse {
    if (authorization) {
      try {
        return jwt.verify(authorization, tokenConfiguration.JWT_SECRET) as ITokenResponse;
      } catch (err) {
        return err;
      }
    }
    throw new Error(CustomError.INVALID_TOKEN);
  }
}
