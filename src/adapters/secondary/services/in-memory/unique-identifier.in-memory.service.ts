import { IUniqueIdentifierService } from "../../../../core/ports/services/unique-identifier.service";

export default class InMemoryUniqueIdentifierService implements IUniqueIdentifierService {
  private count: number = 0;

  public generate(): string {
    this.count++;
    return `UID${this.count}`;
  }
}
