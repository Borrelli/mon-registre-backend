export default interface IPasswordHashingService {
  compare(password: string, comparedPassword: string): Promise<any>;
  hash(password: string): string;
}
