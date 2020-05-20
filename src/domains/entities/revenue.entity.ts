export interface IRevenueProps {
  reference: string;
  customerName: string;
  customerId: string;
  amountExcludingTax: number;
  amountIncludingTax: number;
  amountVAT: number;
  paiementMethod: string;
}

export class Revenue {
  constructor(private _uid: string, private _date: Date, private revenueProps: IRevenueProps) {}

  get uid() {
    return this._uid;
  }

  get date() {
    return this._date;
  }

  get reference() {
    return this.revenueProps.reference;
  }

  get customerName() {
    return this.revenueProps.customerName;
  }

  get customerId() {
    return this.revenueProps.customerId;
  }

  get amountExcludingTax() {
    return this.revenueProps.amountExcludingTax;
  }

  get amountIncludingTax() {
    return this.revenueProps.amountIncludingTax;
  }

  get amountVAT() {
    return this.revenueProps.amountVAT;
  }

  get paiementMethod() {
    return this.revenueProps.paiementMethod;
  }
}
