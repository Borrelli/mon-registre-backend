import { User } from "../../entities/user.entity";
import { IUserRepository } from "../../ports/repositories/user.repository";
import { UserMapper } from "../../mapper/user.mapper";
import { IUserEntityDTO } from "../../DTO/user.DTO";
import IPasswordHashingService from "../../ports/services/password-hashing.service";
import { IUniqueIdentifierService } from "../../ports/services/unique-identifier.service";
import { IDateService } from "../../ports/services/date.service";

export class CreateUser {
  constructor(
    private repository: IUserRepository,
    private uniqueIdentifierService: IUniqueIdentifierService,
    private dateService: IDateService,
    private passwordHashingService: IPasswordHashingService
  ) {}

  public async execute(userProps: IUserEntityDTO) {
    userProps.password = this.passwordHashingService.hash(userProps.password);
    const user = new User(this.uniqueIdentifierService.generate(), this.dateService.generate(), userProps);
    await this.repository.exist(user.email);
    return this.repository.create(UserMapper.toRepository(user));
  }
}
