import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyUpdateInput = {
  businessRegistrationNumber?: string | null;
  currency?: "Kes" | "Usd";
  kraPin?: string | null;
  logo?: InputJsonValue;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  website?: string | null;
};
