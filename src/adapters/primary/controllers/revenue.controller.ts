import { Request, Response } from "express";
import RevenueDependency from "../../../configuration/dependencies/revenue.dependency";
import { Middleware } from "../middleware";

export default class RevenueController extends Middleware {
  constructor(private revenueDependency: RevenueDependency) {
    super();
  }

  public create = async (request: Request, response: Response) => {
    const { revenue } = request.body;
    try {
      const tokenResponse = this.middlewareDependency.verifyToken().accessToken(request.headers.authorization);
      const createResponse = await this.revenueDependency.create().execute(revenue, tokenResponse.uid);
      return response.send(createResponse);
    } catch (err) {
      return response.status(500).send(err);
    }
  };

  public findAll = async (request: Request, response: Response) => {
    try {
      const tokenResponse = this.middlewareDependency.verifyToken().accessToken(request.headers.authorization);
      const findResponse = await this.revenueDependency.find().all(tokenResponse.uid);
      return response.send(findResponse);
    } catch (err) {
      return response.status(500).send(err);
    }
  };
}
