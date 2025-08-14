import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyWhereInput = {
  businessRegistrationNumber?: StringNullableFilter;
  currency?: "Kes" | "Usd";
  id?: StringFilter;
  kraPin?: StringNullableFilter;
  logo?: JsonFilter;
  name?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
  website?: StringNullableFilter;
};
