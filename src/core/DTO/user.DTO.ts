export interface IUserRepositoryDTO {
  uid: string;
  creationDate: Date;
  firstname: string;
  lastname: string;
  email: string;
}

export interface IUserEntityDTO {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
