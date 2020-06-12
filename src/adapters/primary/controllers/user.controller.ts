import { Request, Response } from "express";
import UserDependency from "../../../configuration/dependencies/user.dependency";
import { Middleware } from "../middleware";
import { Token } from "../../../core/entities/token.entity";

interface UserDTO {
  accessToken: Token;
  refreshToken: Token;
}

export default class UserController extends Middleware {
  constructor(private dependencies: UserDependency) {
    super();
  }

  public auth = async (request: Request, response: Response) => {
    try {
      this.middlewareDependency.verifyToken().refreshToken(request.headers.authorization);
      return response.send();
    } catch (err) {
      return response.status(403);
    }
  };

  public create = async (request: Request, response: Response) => {
    const { firstname, lastname, email, password } = request.body;
    try {
      const createResponse = await this.dependencies.create().execute({ firstname, lastname, email, password });
      const accessToken = this.middlewareDependency.signToken().accessToken(createResponse.uid);
      const refreshToken = this.middlewareDependency.signToken().refreshToken(createResponse.uid);
      const DTO: UserDTO = {
        accessToken,
        refreshToken,
      };
      return response.send(DTO);
    } catch (err) {
      return response.status(500).send(err);
    }
  };
}
