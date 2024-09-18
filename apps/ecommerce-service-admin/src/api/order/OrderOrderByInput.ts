import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
