import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  totalPrice?: FloatNullableFilter;
};
