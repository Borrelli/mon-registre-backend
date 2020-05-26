import { Request, Response } from "express";
import RevenueDependency from "../../../configuration/dependencies/revenue.dependency";
import { Middleware } from "../middleware";

export default class RevenueController extends Middleware {
  constructor(private revenueDependency: RevenueDependency) {
    super();
  }

  public findAll = async (request: Request, response: Response) => {
    const authorization = request.headers.authorization;

    try {
      const tokenResponse = this.middlewareDependency.verifyToken().execute(authorization);
      const findResponse = await this.revenueDependency.find().all(tokenResponse.uid);
      return response.send(findResponse);
    } catch (err) {
      return response.status(500).send(err);
    }
  };
}
