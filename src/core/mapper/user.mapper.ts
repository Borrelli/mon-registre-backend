import { User, IUserRepoDTO } from "../entities/user.entity";

export class UserMapper {
  public static toRepository(user: User): IUserRepoDTO {
    return {
      uid: user.uid,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };
  }
}
