import { Request, Response } from "express";
import UserDependencies from "../../../configuration/dependencies/user.dependency";

export default class UserController {
  constructor(private dependencies: UserDependencies) {}

  public create = async (request: Request, response: Response) => {
    const { firstname, lastname, email } = request.body;
    try {
      const createResponse = await this.dependencies.create().execute({ firstname, lastname, email });
      return response.send(createResponse);
    } catch (err) {
      return response.status(500).send(err);
    }
  };
}
