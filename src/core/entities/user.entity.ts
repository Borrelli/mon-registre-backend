import { IUserEntityDTO } from "../DTO/user.DTO";
import { CustomError } from "./custom-error.entity";

export class User {
  constructor(private _uid: string, private _creationDate: Date, private _userProps: IUserEntityDTO) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!pattern.test(this._userProps.email)) throw new Error(CustomError.INVALID_EMAIL);
  }

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
