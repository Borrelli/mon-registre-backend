export interface IUserProps {
  firstname: string;
  lastname: string;
  email: string;
}

export interface IUserRepoDTO {
  uid: string;
  firstname: string;
  lastname: string;
  email: string;
}

export class User {
  constructor(private _uid: string, private _creationDate: Date, private userProps: IUserProps) {}

  get uid() {
    return this._uid;
  }

  get creationDate() {
    return this._creationDate;
  }

  get firstname() {
    return this.userProps.firstname;
  }
  get lastname() {
    return this.userProps.lastname;
  }
  get email() {
    return this.userProps.email;
  }
}
