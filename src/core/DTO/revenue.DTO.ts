export interface IRevenueRepositoryDTO {
  uid: string;
  creationDate: Date;
  reference: string;
  customerName: string;
  userId: string;
  amountExcludingTax: number;
  amountIncludingTax: number;
  amountVAT: number;
  paiementMethod: string;
}

export interface IRevenueEntityDTO {
  reference: string;
  customerName: string;
  userId: string;
  amountExcludingTax: number;
  amountIncludingTax: number;
  amountVAT: number;
  paiementMethod: string;
}
