import { IRevenueDTO } from "../DTO/revenue.DTO";

export class Revenue {
  constructor(private _uid: string, private _creationDate: Date, private _revenueProps: IRevenueDTO) {}

  get uid() {
    return this._uid;
  }
  get creationDate() {
    return this._creationDate;
  }
  get reference() {
    return this._revenueProps.reference;
  }
  get customerName() {
    return this._revenueProps.customerName;
  }
  get userId() {
    return this._revenueProps.userId;
  }
  get amountExcludingTax() {
    return this._revenueProps.amountExcludingTax;
  }
  get amountIncludingTax() {
    return this._revenueProps.amountIncludingTax;
  }
  get amountVAT() {
    return this._revenueProps.amountVAT;
  }
  get paiementMethod() {
    return this._revenueProps.paiementMethod;
  }
}
