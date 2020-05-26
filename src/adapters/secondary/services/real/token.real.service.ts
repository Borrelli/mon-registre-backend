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
        const formatedAuthorization = authorization.split(" ");
        if (formatedAuthorization[0] !== "Bearer") {
          throw new Error(CustomError.INVALID_TOKEN);
        }
        return jwt.verify(formatedAuthorization[1], tokenConfiguration.JWT_SECRET) as ITokenResponse;
      } catch (err) {
        return err;
      }
    }
    throw new Error(CustomError.INVALID_TOKEN);
  }
}
