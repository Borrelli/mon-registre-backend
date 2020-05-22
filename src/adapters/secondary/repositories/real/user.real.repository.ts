import { IUserRepository } from "../../../../core/ports/repositories/user.repository";
import { User } from "../../../../core/entities/user.entity";
import UserModel from "./models/user.models.real.repository";

export class UserRealRepository implements IUserRepository {
  removeById(id: string): Promise<any> {
    return UserModel.findByIdAndDelete({ uid: id }).exec();
  }
  create(user: User): Promise<any> {
    return new UserModel(user).save();
  }
}
