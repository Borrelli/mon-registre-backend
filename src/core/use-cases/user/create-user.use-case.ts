import { User, IUserProps } from "../../entities/user.entity";
import { IUserRepository } from "../../ports/repositories/user.repository";
import { UserMapper } from "../../mapper/user.mapper";

export class CreateUser {
  constructor(private repository: IUserRepository, private userId: string, private userDate: Date) {}

  public execute(userProps: IUserProps) {
    const user = new User(this.userId, this.userDate, userProps);
    return this.repository.create(UserMapper.toRepository(user));
  }
}
