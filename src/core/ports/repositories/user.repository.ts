import { IUserRepoDTO } from "../../entities/user.entity";
import { ISharedRepository } from "./shared.repository";

export interface IUserRepository extends ISharedRepository<IUserRepoDTO> {
  removeById(id: string): Promise<any>;
}
