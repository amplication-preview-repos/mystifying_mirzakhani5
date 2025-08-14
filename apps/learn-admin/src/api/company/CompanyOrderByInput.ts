import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  businessRegistrationNumber?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  kraPin?: SortOrder;
  logo?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
};
