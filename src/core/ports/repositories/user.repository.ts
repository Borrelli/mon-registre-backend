import { User } from "../../entities/user.entity";
import { ISharedRepository } from "./shared.repository";

export interface IUserRepository extends ISharedRepository<User> {
  removeById(id: string): Promise<any>;
}
