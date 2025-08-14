import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Company = {
  businessRegistrationNumber: string | null;
  createdAt: Date;
  currency?: "Kes" | "Usd";
  id: string;
  kraPin: string | null;
  logo: JsonValue;
  name: string | null;
  owner?: User | null;
  updatedAt: Date;
  website: string | null;
};
