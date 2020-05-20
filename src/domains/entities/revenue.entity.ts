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
}
