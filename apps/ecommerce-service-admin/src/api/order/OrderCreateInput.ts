import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  product?: ProductWhereUniqueInput | null;
  totalPrice?: number | null;
};
