export interface ISharedRepository<T> {
  create(item: T): Promise<any>;
}
