import { ITokenService } from "../../../../core/ports/services/token.service";
import jwt from "jsonwebtoken";
import { TokenConfiguration } from "../../../../configuration/env.configuration";
import { CustomError } from "../../../../core/entities/custom-error.entity";
import { Token } from "../../../../core/entities/token.entity";

export interface ITokenPayload {
  uid: string;
}

export default class RealTokenService implements ITokenService {
  public signAccessToken(payload: ITokenPayload): Token {
    return jwt.sign(payload, TokenConfiguration.SECRET_ACCESS_TOKEN, {
      expiresIn: TokenConfiguration.EXPIRE_ACCESS_TOKEN,
    });
  }

  public signRefreshToken(payload: ITokenPayload): Token {
    return jwt.sign(payload, TokenConfiguration.SECRET_REFRESH_TOKEN, {
      expiresIn: TokenConfiguration.EXPIRE_REFRESH_TOKEN,
    });
  }

  public valideAccessToken(authorization: string | undefined): ITokenPayload {
    if (authorization) {
      try {
        return jwt.verify(authorization, TokenConfiguration.SECRET_ACCESS_TOKEN) as ITokenPayload;
      } catch (err) {
        throw new Error(CustomError.INVALID_TOKEN);
      }
    }
    throw new Error(CustomError.INVALID_TOKEN);
  }

  public valideRefreshToken(authorization: string | undefined): ITokenPayload {
    if (authorization) {
      try {
        return jwt.verify(authorization, TokenConfiguration.SECRET_REFRESH_TOKEN) as ITokenPayload;
      } catch (err) {
        throw new Error(CustomError.INVALID_TOKEN);
      }
    }
    throw new Error(CustomError.INVALID_TOKEN);
  }
}
