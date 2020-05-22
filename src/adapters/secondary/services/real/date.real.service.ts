export default class RealDateService {
  private date: Date = new Date();

  public generate(): Date {
    this.date = new Date();
    return this.date;
  }
}
