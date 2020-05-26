import { Request, Response } from "express";
import RevenueDependency from "../../../configuration/dependencies/revenue.dependency";

export default class RevenueController {
  constructor(private dependencies: RevenueDependency) {}

  public findAll = async (request: Request, response: Response) => {
    const { userId } = request.body;
    try {
      const findResponse = await this.dependencies.find().all(userId);
      return response.send(findResponse);
    } catch (err) {
      return response.status(500).send(err);
    }
  };
}
