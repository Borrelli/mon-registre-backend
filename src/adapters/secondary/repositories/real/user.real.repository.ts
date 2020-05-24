import { IUserRepository } from "../../../../core/ports/repositories/user.repository";
import UserModel from "./models/user.models.real.repository";
import { IUserRepositoryDTO } from "../../../../core/DTO/user.DTO";
import { UserSchema } from "./models/user.models.real.repository";
import { CustomError } from "../../../../core/entities/custom-error.entity";

export class UserRealRepository implements IUserRepository {
  public removeById(id: string): Promise<any> {
    return UserModel.findByIdAndDelete({ uid: id }).exec();
  }
  public create(user: IUserRepositoryDTO): Promise<UserSchema> {
    return new UserModel(user).save();
  }
  public exist(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      UserModel.findOne({ email })
        .exec()
        .then((user) => {
          if (user) {
            return reject(new Error(CustomError.USER_EXIST));
          }
          return resolve();
        })
        .catch((err) => reject(err));
    });
  }
}
