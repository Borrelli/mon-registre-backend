import { IUserRepository } from "../../../../core/ports/repositories/user.repository";
import UserModel from "./models/user.models.real.repository";
import { IUserRepositoryDTO } from "../../../../core/DTO/user.DTO";
import { UserSchema } from "./models/user.models.real.repository";

export class UserRealRepository implements IUserRepository {
  removeById(id: string): Promise<any> {
    return UserModel.findByIdAndDelete({ uid: id }).exec();
  }
  create(user: IUserRepositoryDTO): Promise<UserSchema> {
    return new UserModel(user).save();
  }
}
