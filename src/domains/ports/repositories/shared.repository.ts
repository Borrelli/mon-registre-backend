export interface ISharedRepository<T> {
  create(t: T): Promise<any>;
}
