import { IUserRepository } from "../../../../core/ports/repositories/user.repository";
import { User } from "../../../../core/entities/user.entity";

export class UserInMemoryRepository implements IUserRepository {
  private userList: User[] = [
    new User("uid2", new Date("2000-01-02"), {
      email: "email@user.test2",
      firstname: "firstname2",
      lastname: "lastname2",
    }),
    new User("uid3", new Date("2000-01-03"), {
      email: "email@user.test3",
      firstname: "firstname3",
      lastname: "lastname3",
    }),
    new User("uid4", new Date("2000-01-04"), {
      email: "email@user.test4",
      firstname: "firstname4",
      lastname: "lastname4",
    }),
  ];

  public create(user: User): Promise<"ok" | "ko"> {
    return new Promise((resolve, reject) => {
      this.userList.push(user);
      resolve("ok");
    });
  }

  public removeById(id: string): Promise<"ok" | "ko"> {
    return new Promise((resolve, reject) => {
      const index = this.userList.findIndex((user) => user.uid === id);
      if (index === -1) {
        reject("ko");
      }
      this.userList.splice(index, 1);
      resolve("ok");
    });
  }
}
