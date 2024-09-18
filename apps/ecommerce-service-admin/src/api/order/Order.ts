import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  product?: Product | null;
  totalPrice: number | null;
  updatedAt: Date;
};
