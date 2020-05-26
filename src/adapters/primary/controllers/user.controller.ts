import { Request, Response } from "express";
import UserDependency from "../../../configuration/dependencies/user.dependency";
import { Middleware } from "../middleware";

export default class UserController extends Middleware {
  constructor(private dependencies: UserDependency) {
    super();
  }

  public create = async (request: Request, response: Response) => {
    const { firstname, lastname, email, password } = request.body;
    try {
      const createResponse = await this.dependencies.create().execute({ firstname, lastname, email, password });
      const token = this.middlewareDependency.signToken().execute(createResponse.uid);
      return response.send(token);
    } catch (err) {
      return response.status(500).send(err);
    }
  };
}
