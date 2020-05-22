export interface IUserProps {
  firstname: string;
  lastname: string;
  email: string;
}

export class User {
  constructor(private _uid: string, private _date: Date, private userProps: IUserProps) {}

  get uid() {
    return this._uid;
  }
}
