import { User } from "../entities/user.entity";
import { IUserRepositoryDTO } from "../DTO/user.DTO";

export class UserMapper {
  public static toRepository(user: User): IUserRepositoryDTO {
    return {
      uid: user.uid,
      creationDate: user.creationDate,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };
  }
}
