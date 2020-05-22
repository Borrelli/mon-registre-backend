import { IUserRepository } from "../../ports/repositories/user.repository";

export class RemoveUser {
  constructor(private repository: IUserRepository) {}

  public execute(userId: string) {
    return this.repository.removeById(userId);
  }
}
