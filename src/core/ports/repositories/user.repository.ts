import { ISharedRepository } from "./shared.repository";
import { IUserRepositoryDTO } from "../../DTO/user.DTO";

export interface IUserRepository extends ISharedRepository<IUserRepositoryDTO> {
  removeById(id: string): Promise<any>;
  exist(email: string): Promise<void>;
}
