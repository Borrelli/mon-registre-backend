import IDateService from "../../../../core/ports/services/date.service";

export default class InMemoryDateService implements IDateService {
  private date: Date = new Date();

  public generate(): Date {
    this.date = new Date("2000-01-01");
    return this.date;
  }
}
