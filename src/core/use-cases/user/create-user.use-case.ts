import { User } from "../../entities/user.entity";
import { IUserRepository } from "../../ports/repositories/user.repository";
import { UserMapper } from "../../mapper/user.mapper";
import { IUserEntityDTO } from "../../DTO/user.DTO";

export class CreateUser {
  constructor(private repository: IUserRepository, private userId: string, private userDate: Date) {}

  public async execute(userProps: IUserEntityDTO) {
    const user = new User(this.userId, this.userDate, userProps);
    await this.repository.exist(user.email);
    return this.repository.create(UserMapper.toRepository(user));
  }
}
