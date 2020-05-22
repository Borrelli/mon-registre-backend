import { IUserRepository } from "../../../../core/ports/repositories/user.repository";
import { User, IUserRepoDTO } from "../../../../core/entities/user.entity";
import UserModel from "./models/user.models.real.repository";

export class UserRealRepository implements IUserRepository {
  removeById(id: string): Promise<any> {
    return UserModel.findByIdAndDelete({ uid: id }).exec();
  }
  create(user: IUserRepoDTO): Promise<any> {
    return new UserModel(user).save();
  }
}
