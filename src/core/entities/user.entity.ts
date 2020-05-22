import { IUserEntityDTO } from "../DTO/user.DTO";

export class User {
  constructor(private _uid: string, private _creationDate: Date, private _userProps: IUserEntityDTO) {}

  get uid() {
    return this._uid;
  }
  get creationDate() {
    return this._creationDate;
  }
  get firstname() {
    return this._userProps.firstname;
  }
  get lastname() {
    return this._userProps.lastname;
  }
  get email() {
    return this._userProps.email;
  }
}
