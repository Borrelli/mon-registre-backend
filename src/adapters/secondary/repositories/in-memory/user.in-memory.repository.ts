import { IUserRepository } from "../../../../core/ports/repositories/user.repository";
import { User } from "../../../../core/entities/user.entity";
import { IUserRepositoryDTO } from "../../../../core/DTO/user.DTO";
import { CustomError } from "../../../../core/entities/custom-error.entity";

export class UserInMemoryRepository implements IUserRepository {
  private userList: IUserRepositoryDTO[] = [
    new User("uid2", new Date("2000-01-02"), {
      email: "email2@user.test",
      firstname: "firstname2",
      lastname: "lastname2",
    }),
    new User("uid3", new Date("2000-01-03"), {
      email: "email3@user.test",
      firstname: "firstname3",
      lastname: "lastname3",
    }),
    new User("uid4", new Date("2000-01-04"), {
      email: "email4@user.test",
      firstname: "firstname4",
      lastname: "lastname4",
    }),
  ];

  public create(user: IUserRepositoryDTO): Promise<"ok" | "ko"> {
    return new Promise((resolve, reject) => {
      this.userList.push(user);
      return resolve("ok");
    });
  }

  public removeById(id: string): Promise<"ok" | "ko"> {
    return new Promise((resolve, reject) => {
      const index = this.userList.findIndex((user) => user.uid === id);
      if (index === -1) {
        return reject("ko");
      }
      this.userList.splice(index, 1);
      return resolve("ok");
    });
  }

  public exist(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const foundedUser = this.userList.find((user) => user.email === email);
      if (foundedUser) {
        return reject(new Error(CustomError.USER_EXIST));
      }
      return resolve();
    });
  }
}
