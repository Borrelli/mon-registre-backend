import { v4 as uuidv4 } from "uuid";
import { IUniqueIdentifierService } from "../../../../core/ports/services/unique-identifier.service";

export default class RealUniqueIdentifierService implements IUniqueIdentifierService {
  public generate(): string {
    return uuidv4();
  }
}
