import { IDateService } from "../../../../core/ports/services/date.service";

export default class RealDateService implements IDateService {
  private date: Date = new Date();

  public generate(): Date {
    this.date = new Date();
    return this.date;
  }
}
