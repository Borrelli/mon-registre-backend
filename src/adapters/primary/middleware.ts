import MiddlewareDependency from "../../configuration/dependencies/middleware.dependency";

export class Middleware {
  public middlewareDependency: MiddlewareDependency;

  constructor() {
    this.middlewareDependency = new MiddlewareDependency();
  }
}
